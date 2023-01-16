import './Signup.css';
import { useRef ,useEffect } from 'react';
function SignIn()
{const emailRef = useRef();
    const passwordRef = useRef();
  function log()
  {const requestOptions = {
          method: "POST",
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        };
      fetch("http://localhost:3000/user/login",requestOptions)
      .then((response)=>response.json())
      .then((data)=>console.log(data));
  }
  useEffect(()=>{log()});
    return(<div className="SignIn" id="intro">
        <p class="sign">Sign in to  <br/> 
   <span class="account">Your Account</span>
</p>
<p class="signdesc">Create an account and discover the potential of the services you use. Your account gives you more options by personalizing your experience and giving you easy access to your most important information.</p>
  
           <div class="container" id="signinbx">

<p class="welcome">Welcome to <span class="Test">Test Me</span></p> 
<p class="Sin">Sign in</p>
<p class="NA">No Account ?</p>
<a href="/SignUp" class="signUp" >Sign up</a>
<label for="staticEmail" class="form-label" id="label1" >Email address</label>
    <input type="email" class="form-control" id="staticEmail" aria-describedby="emailHelp" required placeholder='Enter Your Email' ref={emailRef} ></input>
    <label for="inputPassword" class="form-label" id="label2">Password</label>
    <input type="password" class="form-control" id="inputPassword"  required placeholder='Enter Password' ref={passwordRef}></input>
    <div class="mb-3 form-check remember">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button onClick={log} type="submit" class="btn btn-primary log" id="signbtn">Login</button>
</div>
</div>);
}
export default SignIn ;