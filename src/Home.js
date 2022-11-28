import logo from './logo.svg';
import Navbar from './Navbar';
function Home(){
    return(
        <div className="Home">
        
            <Navbar/>
            <section id="intro">
            <div data-aos="fade-left">
                
                <h1>
                Welcome to Test-Me plateform </h1>
                <h2>
                Improve your skills and assign your technical tests 
                </h2>
            </div>
            </section>
          
      </div>
    );
}
export default Home;