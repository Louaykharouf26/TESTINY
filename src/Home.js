import logo from './logo.svg';
import Navbar from './Navbar';
import courses from './Courses.png';
function Home(){
    return(
        <div className="Home">
        
            <Navbar/>
            <section id="intro">
      <div class="welcome" data-aos="fade-right">
                
                <h1 class="typewriter">
                Welcome to Test-Me plateform </h1>
                <h2>
                Improve your skills and assign your technical tests 
                </h2>  
            </div>
            <a href="#" class="btn-get-started">Get Started</a>
            </section>
          <section id="services">
            <h1 class="About">About Us</h1>
       <p class="aboutdesc">Test Me is just a plateform that give to developpers the chance to practice some of their favorite skills 
         and gives to recruiter a secure space to propose some technical tests </p>  
         <h1 class="About">Our Services</h1>
         <div class="box1">
          <img class="courses" src={require('./Courses.png')}></img>
          
          <p class="TC">Training Courses</p>
          <p class="TT">Training Tests</p>
         </div>
         <div class="box2">
         <img class="courses" src={require('./OnlineTest.png')}></img>
          
          <p class="TC">Technical Tests</p>
          <p class="TT">Skill Tests</p>
</div>
<div class="box3">
<img class="courses" src={require('./Fraud.png')}></img>
          
          <p class="TC">Fraud Detection</p>
          
</div>
          </section>
      </div>
    );
}
export default Home;