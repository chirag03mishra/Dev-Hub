import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/Error/ErrorPage";
import Forgot from "./Pages/ForgotPassword/Forgot";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import { useState, useEffect } from "react";
import "./App.scss";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./confiq/firebase";
import Create from "./Pages/Create/Create";
import logo from "./image/logo.png"
function App() {

  const [isAuth, setIsAuth] = useState(false);
  const Logout = (e) => {
    e.preventDefault()
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname("/");
    })
  }
  return (
    <BrowserRouter>

      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="text">
              <Link to={"/"} className="img"><img src={logo} alt="" srcset="" /></Link>
            </span>
          </div>
          <div className="links">
          <span><Link to="/" className="home">Home</Link> </span>
          <span><Link to="/contact" className="contact-link">Contact</Link> </span>
       <span> {!isAuth ? <Link to="/login">Login</Link> : <button className="logout-btn" onClick={Logout}>Logout</button>}</span>    
         <span>{!isAuth && <Link to="/register">Register</Link>}</span>   
        <span>{isAuth && <Link to="/create">Create New Blog</Link>}</span>    
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/create" element={<Create isAuth={isAuth} />}></Route>
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
