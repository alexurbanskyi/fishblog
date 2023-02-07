import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({isAuth}) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }


  console.log('IS AUTH -->', isAuth)
  return (
    <div className="homepage">
      {postList.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <h3>{post.postText}</h3>
          {
            isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)}>&#128465;</button>
          }
          <p>author: {post.author.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
