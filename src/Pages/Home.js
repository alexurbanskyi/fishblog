import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  
    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

 return (
    <div className="homepage">
      {postList.map((post) => (
        <div className="home_post">
          <div className="home_post_title">
            <h3 >{post.title}</h3>
            {
              post.currentDate && <p className="date">{post.currentDate}</p>
            }
          </div>
          {isAuth && post.author.id === auth.currentUser.uid && (
            <div className="del_btn">
              <button onClick={() => deletePost(post.id)}>&#128465;</button>
            </div>
          )}
          <div>{post.postText}</div>
          <p className="home_author">author: {post.author.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
