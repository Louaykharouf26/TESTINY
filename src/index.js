import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './SignIn';
import Signup from './Signup';
import Developer from './pages/developer_dashboard';
import Recruiter from './pages/recruiter';
import Exam from './pages/exam_page';
import Listdeveloper from './pages/developer_list_exams';
import Addresponse from './pages/developer_add_response';
import Recruiterlist from './pages/recruiter_list';
import Thank from './pages/thanks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <Signup />,
  }, 
  {
    path: "/profile/developer",
    element: <Developer />,
  },
  {
    path: "/profile/recruiter",
    element: <Recruiter />,
  },
  {
    path: "/recruiter/addexam",
    element: <Exam />,
  },
  {
    path: "/student/examslist",
    element: <Listdeveloper />,
  },
  {
    path: "/student/submit",
    element: <Addresponse />,
  },
  {
    path: "/recruiter/examslist",
    element: <Recruiterlist />,
  },
  {
    path: "/student/thanks",
    element: <Thank />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
