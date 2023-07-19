import React, { useState } from 'react'
import "./register.scss"
import { auth } from '../../confiq/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [displayname , setDisplayName]=useState("");
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function registerUser(e) {
    e.preventDefault();
    if (!name || !mail || !username || !pass) {
      setError("Please Fill All The Fields");
      return;
    }
    setError("");
    createUserWithEmailAndPassword(auth, mail, pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user,{
          displayName:name,
        });
        setDisplayName(name);
console.log(displayname);
        window.alert("Registration Succesful Please Login")
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <div className="register">
      <div className="card">
        <div className="main">
          <h1>Developer-HUB</h1>
          <form onSubmit={registerUser} action="">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="Password"
              placeholder="Password"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            />

            <button id="log" onClick={registerUser}>Register</button>
            <b>{error}</b>
            <span>Already a User?</span>
            <Link to="/login"> <button id="reg">Login</button></Link>

          </form>
        </div>
      </div>

    </div>

  )
}

export default Register
