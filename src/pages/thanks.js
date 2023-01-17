import React from "react";
import './developer_list_exams.css';
import logo from './student.png';
function Thank(){

  return(
  <div>
  <header>
<div class="left_area">
      <h3>TEST ME</h3>
    </div>
    <div class="right_area">
      <a href="/" class="logout_btn">Logout</a>
    </div>
    </header>
  <div class="sidebar">

        <center>

<img class="profile_image" src={require('./student.png')}></img>
      <h4>Helmi Massoussi</h4>
      <h6 >( Student )</h6>

    </center>
<a href="/profile/developer"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a>
    <a href="/student/examslist"><i class="fas fa-book"></i><span>Exams List</span></a>
    <a href="/student/submit"><i class="fas fa-sort-numeric-up"></i><span>Submit Response</span></a>
  </div>

 <br/><br/><br/><br/>

<br/><br/>
 <div class="container1">


                  <h2 class="m-b-20">THANK YOU FOR YOUR SUBMISSION! </h2>
                  <br/>
                                    <br/>
                  <br/>

                              <br/>

                  <h3 class="m-b-20">You'll reveive an email shortly with the results.  </h3>       





    

    </div>



    </div>

  );
}

export default Thank;