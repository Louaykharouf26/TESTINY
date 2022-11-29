import './Navbar.css';
import Aos from 'aos';
function Navbar(){
    Aos.init();
    return(
    <div className="Navbar">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="logo" href="#">Test Me</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Training </a>
        <a class="nav-link" href="#">Technical Test</a>
        
        <div class="left">
        <button type="button" class="btn signup-btn" data-bs-toggle="modal" data-bs-target="#registration">Sign Up</button>
        <button type="button" class="btn signin-btn" data-bs-toggle="modal" data-bs-target="#logform">Login</button>


        
        </div>
      </div>
    </div>
  </div>
</nav>
<div class="modal fade" id="registration" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Welcome ! Register here </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail2" class="form-label">Confirm E-mail</label>
    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp1"></input>
    <div id="emailHelp1" class="form-text">Confirm The E-mail.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2"></input>
  </div>
  <div class="mb-3">
  <select class="form-select" aria-label="Default select example">
  <option selected>Sign Up as </option>
  <option value="1">Recruiter</option>
  <option value="2">Developer</option>

</select>
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
      </div>
      
    </div>
  </div>
</div>

<div class="modal fade" id="logform" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Welcome ! Login here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
      </div>
      
    </div>
  </div>
</div>
    </div>
    );
}
export default Navbar; 