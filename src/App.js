import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import CreatePost from './Pages/CreatePost'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const navigate = useNavigate()

  const logoutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }

  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      {
        !isAuth ? <Link to='/login'>Login</Link> : 
        <>
        <Link to='/createpost'>Create Post</Link>
        <button onClick={logoutUser}>Log OUT</button>
        </>
      }
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
    </Routes>
    </>
  );
}

export default App;
