import React from 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SignUpPage.css';
// import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { get } from 'react-scroll/modules/mixins/scroller';
// import {auth} from './init_firebase';


const SignUpPage = () => {
  // const navigate =useNavigate();
  let email, password;
  const [value, setVlaue] = useState({
    email:"",
    password:"",
  });
  // const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    if(!value.email || !value.password){
      setErrMsg("fill all fields");
      return;
    }
    setErrMsg("");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, value.email, value.password)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=> console.log("Error-",err));

    e.preventDefault();
    // Handle sign-in logic
  };
  const  [errMsg, setErrMsg]= useState("");

  const navigate = useNavigate();

  const handleLogin = () =>{

    navigate('/login');
  }


  return (
    <>
    <div className="signin-container">
      <h1>SignUp Your Account </h1>
      <form>
      <div className='input-container'>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setVlaue((prev)=>({...prev, email:e.target.value}))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setVlaue((prev)=>({...prev, password:e.target.value}))
            }
          />
        </div>
      </div>
        <b className='errMsg'>{errMsg}</b>
        <button className='SignUp' onClick= {handleSubmit}>Sign Up</button>
        <div className="outer">
          <span>Already have Account</span>
           <button onClick ={handleLogin}>Login</button>
    </div>
      </form>
    </div>
    </>
  );
};

export default SignUpPage;
