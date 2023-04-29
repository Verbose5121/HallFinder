import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle,
  registerWithEmailAndPassword} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./style2.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  
  const container = document.getElementById('container');


  useEffect(() => {
    if (loading) {
      // add a loading screen?
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
  <>
      <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <div className="social-container">
        </div>
        <input 
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input 
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input 
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button style={{backgroundColor:"#112d32", width:"10rem", margin:"20px 0 0 0"}} className="register__btn" onClick={register}>
          Sign Up
        </button>
        <div class="separator">OR</div>
        <button style={{backgroundColor:"#112d32", width:"17rem", textAlign:"start"}}
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
        <img style={{padding:"5px 10px 5px 0px",width:"33px", height:"33px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>Register with Google
        </button>
      </form>
      <div>
          Already have an account? <Link to="/">Login</Link> now.
      </div>
    </div>
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        {/* <div className="social-container">
        <a href="#" className="social"><i className="far fa-user-circle"></i></a>
        </div> */}
        <span style={{margin:"20px"}}>Enter your login info!</span>
        <input 
        type="email" 
        className="login__textBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        />
        <input 
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Link to="/reset">Forgot Password</Link>

         <button style={{backgroundColor:"#112d32", width:"10rem"}}
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >Login
        </button>
        
        <div class="separator">OR</div>

        <button style={{backgroundColor:"#112d32", width:"15rem", textAlign:"start"}} className="login__btn login__google" onClick={signInWithGoogle}>
        <img style={{padding:"5px 10px 5px 0px",width:"33px", height:"33px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>Login with Google
        </button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <img src="src/images/HallFinder-1 (6).png" width="300px" height="120px"/>
          {/* <h1>Hall Finder!</h1> */}
          <p>Enter your login info to sign in!</p>
          <button className="ghost" id="signIn" onClick={() => {
    container.classList.remove("right-panel-active")}}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
        <img src="src/images/HallFinder-1 (6).png" width="300px" height="120px"/>

          {/* <h1>Hall Finder!</h1> */}
          <p>Enter your personal details and start your journey with us</p>
          <button  className="ghost" id="signUp" onClick={() => {
    container.classList.add("right-panel-active")}}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>

    {/* <script src="main.js"></script> */}
  </>


  );
}


export default Login;