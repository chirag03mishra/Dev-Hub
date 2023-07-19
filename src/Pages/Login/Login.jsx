import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from "../../confiq/firebase";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = ({setIsAuth}) => {

   

const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [error , setError] = useState("");

 
    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth , mail , pass)
        .then(async (res) =>{
            localStorage.setItem("isAuth" , true);
            setIsAuth(true);
            navigate("/");
        })
        .catch((err)=>{
            
            setError(err.message);
        })
    }
   

    return (
        <div className="login">
            <div className="card">
                <div className="main">
                    <h1>Developer-HUB</h1>
                    <form action="">
                        <input
                            type="mail"
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="Email"
                            value={mail}
                        />
                        <input
                            type="Password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Password"
                        />
                        <b style={{color:"white"}}>{error}</b>
                        <button id="log" onClick={SignIn}>Login</button>
                        <Link to="/forgot"><span><button id="fp">Forgot password?</button></span></Link>
                        <span>New User?</span>
                        <Link to="/register"> <button id="reg">Register</button></Link>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login;