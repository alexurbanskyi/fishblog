import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function Home() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="homepage">
      {postList.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <h3>{post.postText}</h3>
          <p>author: {post.author.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
