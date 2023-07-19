import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../confiq/firebase";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  function goToLogin() 
  {
    alert("E-mail Reset Link Sent Successfully! Please Check Your Mail");
    navigate("/login");
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(null);
  const [err, setError] = useState("");

  async function handleResetPassword(event) {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSuccess(true);
    } catch (error) {
      setResetSuccess(false);
      setError(error.message);
      const displayError = error.message;
      if (displayError.includes("missing-email")) {
        setError("this Email is Not registered!");
      }
      if (!email) {
        setError("you have not entered a correct email");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Reset Password</button>
      </form>
      {resetSuccess === true && (
        <p>
          {goToLogin()}
        </p>
      )}
      {resetSuccess === false && (
        <p>
          Failed to send password reset email because {err}
          <br />
          <Link to={"/register"}>
            <button>Register Now!</button>
          </Link>
        </p>
      )}
    </div>
  );

  
};

export default Forgot;
