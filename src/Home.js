import Navbar from './Navbar';
import Afterlogin from './Afterlogin';
import courses from './Courses.png';
import './App.css';
function Home(){
    return(
        <div className="Home">
        
            <Navbar/>
      
            <section id="intro">
      <div class="welcome1" data-aos="fade-right">
                
                <h1 class="typewriter">
                Welcome to Test-Me plateform </h1>
                <h2>
                Test your skills and become a master
                </h2>  
            </div>
            <a href="#" class="btn-get-started">Get Started</a>
            </section>
          <section id="services" data-aos="fade-up">
            <h1 class="About">About Us</h1>
       <p class="aboutdesc">
         Our Plateform gives a space to developper to practice their skill , prepare for certifications 
        also it gives a secure space to recruiter to propose technical tests 
         </p>  
         <h1 class="About">Our Services</h1>
         <div class="box1" data-aos="fade-up">
          <img class="courses" src={require('./Courses.png')}></img>
          <p class="TC">Training Courses</p>
          <p class="TT">Training Tests</p>
         </div>
         <div class="box2" data-aos="fade-up">
         <img class="courses" src={require('./OnlineTest.png')}></img>
          
          <p class="TC">Technical Tests</p>
          <p class="TT">Skill Tests</p>
</div>
<div class="box3" data-aos="fade-up">
<img class="courses" src={require('./Fraud.png')}></img>
          
          <p class="TC">Fraud Detection</p>
          
</div>
          </section>
      </div>
    );
}
export default Home;