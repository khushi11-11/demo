import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminLogin from './AdminView/AdminLogin';
import Register from './Forms/AlumniRegister';
import DepartmentMgmt from './AdminView/DeptMgmt';
import ProgramMgmt from './AdminView/ProgramMgmt';
import MainPage from './Components/MainPage';
import Feedback from './Forms/FeedbackForm';
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import Home from './Components/Home';
// <<<<<<< main
// =======
// import { BrowserRouter as Router, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
// >>>>>>> main
import NavRoute from './Components/NavRoute';
import MainPage_trial from './Components/MainPage_trial';
import AdminHome from './AdminView/AdminHome';
import Bill from './AlumniView/Bill';
import AlumniLogin from './Forms/AlumniLogin';
import AlumniRegister from './Forms/AlumniRegister';
import FeedbackForm from './Forms/FeedbackForm';
import FeedbackTrack from './AdminView/FeedbackTrack';
import AlumniTrack from './AdminView/AlumniTrack';



// import Carousel from './Components/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// 
// import GetInvolved from './Components/GetInvolved';
// 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// 

  // <NavRoute/>
  // <MainPage />
  <MainPage_trial />
  // <BrowserRouter>
  // <AdminLogin />
  // <Home/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
