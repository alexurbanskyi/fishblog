import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./pages.css";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      console.log(result);
    });
  };

  return (
    <div className="login">
      <div className="login_title">Sign In With Google To Continue</div>
      <div className="login_btn_holder">
        <button className="login_btn" onClick={signInWithGoogle}>
          Login With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
