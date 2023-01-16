import './Signup.css';
import { useRef ,useEffect } from 'react';
function Signup()
{  const usernameRef = useRef();
    const passwordRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    function Sign(){
        const requestOptions = {
            method: "POST",
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: usernameRef.current.value,
                lastname: lastnameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }),
          };
        fetch("http://localhost:3000/user/register",requestOptions)
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
    useEffect(()=>{Sign()});
    return(<div className="SignUp" id="intro">
<p class="sign">Sign Up to <br/> 
   <span class="account">Our Website </span>
</p>
<p class="signdesc">Create an account and discover the potential of the services you use. Your account gives you more options by personalizing your experience and giving you easy access to your most important information.</p>
           <div className="container" id="signinbx">
 <p class="welcome">Welcome to <span class="Test">Test Me</span></p> 
 <p class="Sup">Sign Up</p>
 <p class="NA1">Have an Account ?</p>
 <a href="/SignIn" class="signUp">Sign in</a>
 <label for="staticEmail1" class="form-label"  id="label1v0">Email address</label>
    <input type="email" class="form-control" id="staticEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' ref={emailRef}></input>
    <label for="name1" class="form-label" id="labelname">Enter Your Name </label>
    <input type="text" class="form-control" id="name1" aria-describedby="emailHelp1" placeholder='Enter Your Name' ref={usernameRef}></input>
    <label for="lastname" class="form-label" id="labellastname">Enter Your last Name</label>
    <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp1" placeholder='Enter Your Last Name' ref={lastnameRef}></input>
    <label for="inputPassword2" class="form-label" id="label2v0">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder='Enter Your Password' ref={passwordRef}></input>
    <label for="password-confirm" class="form-label" id="confirm">Confirm Password</label>
    <input type="password" class="form-control" id="password-confirm" placeholder='Confirm Your Password'></input>
    <select class="form-select" aria-label="Default select example" id="serviceprovider">
  <option selected>Sign Up as </option>
  <option value="1">Recruiter</option>
  <option value="2">Developer</option>
</select>
<button onClick={Sign} type="submit" class="btn btn-primary log" id="signupbtn">Sign Up</button>
 </div>
</div>);
}
export default Signup ;