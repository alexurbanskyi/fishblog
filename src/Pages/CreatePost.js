import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  },[]);

  return (
    <div className="createpost">
      <div className="createpost_container">
        <h1 className="cp_title">Create POST</h1>
        <div className="cp_input_holder">
          <h3>Title</h3>
          <input
            className="input_title"
            placeholder="...title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="cp_input_holder">
          <h3>Text</h3>
          <textarea
            className="cp_textarea"
            placeholder="...post text"
            onChange={(event) => setPostText(event.target.value)}
          />
        </div>
        <div className="cp_button_holder">
          <button className="cp_button" onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
