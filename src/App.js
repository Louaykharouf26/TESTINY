import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Developer from './pages/developer_dashboard'
import Exam from './pages/exam_page'
import Addresponse from './pages/developer_add_response'
import Recruiterlist from './pages/recruiter_list'
import Thank from './pages/thanks'


import Listdeveloper from './pages/developer_list_exams';

import Recruiter from './pages/recruiter'

import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/navbar">
         <Navbar />
        </Route>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/apiverif">
        <Login />
        </Route>
        <Route exact path="/SignIn">
        <SignIn />
        </Route>
        <Route exact path="/SignUp">
        <Signup/>
        </Route>
        <Route exact path="/profile/developer">
        <Developer />
        </Route>
        <Route exact path="/profile/recruiter">
        <Recruiter />
        </Route>
        <Route exact path="/recruiter/addexam">
        <Exam />
        </Route>

        <Route exact path="/student/examslist">
        <Listdeveloper />
        </Route>

        <Route exact path="/student/submit">
        <Addresponse />
        </Route>

        <Route exact path="/recruiter/examslist">
        <Recruiterlist />
        </Route>

        <Route exact path="/student/thanks">
        <Thank />
        </Route>

      </Routes>
      
    </Router>
   
  );
}

export default App;
