import React from "react";
import './exam_page.css';
import { useEffect ,useState} from "react";
function Recruiterlist(){
  const [user, setUser] = useState({});
  const id = localStorage.getItem("id");
  const requestOptions = {
    method: "GET",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
   // body: JSON.stringify({
      //id: id,
   // }),
  }
  useEffect(()=>{
    const fetchdata = async () => {
      const result = await fetch(`http://localhost:3000/user/showById/${id}`,requestOptions);
      const jsonResult = await result.json();
      setUser(jsonResult);
    }
    fetchdata();
  },[])
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

<img class="profile_image" src={require('./teacher.png')}></img>
      <h4>{user.username} {user.lastname}</h4>
      <h6 >{user.roles}</h6>

    </center>
<a href="/profile/recruiter"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a>
    <a href="/recruiter/addexam"><i class="fas fa-book"></i><span>Add Exam</span></a>
    <a href="/recruiter/examslist"><i class="fas fa-sort-numeric-up"></i><span>Exams List</span></a>
  </div>

 <br/><br/><br/><br/>

<br/><br/>
 <div class="container2">
  <h2> EXAMS </h2>
  <br/><br/>
    <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Exam N°1
    <a class="badge badge-primary badge-pill">Get the Submitted files</a>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Exam N°2
    <a  class="badge badge-primary badge-pill">Get the Submitted files </a>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Exam N°3
    <a class="badge badge-primary badge-pill">Get the Submitted files</a>
  </li>
</ul>
  </div>
 <br/><br/><br/><br/>
        </div>


  );
}

export default Recruiterlist;