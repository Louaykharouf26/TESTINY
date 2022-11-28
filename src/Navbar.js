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
        <a href="#" class="signup-btn">Sign Up</a>
        <a href="#" class="signin-btn">Login</a>
        
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
    );
}
export default Navbar; 