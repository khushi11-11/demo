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
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
import NavRoute from './Components/NavRoute';
main
import MainPage_trial from './Components/MainPage_trial';
// import RegistrationForm from './demoReg';
import AdminHome from './AdminView/AdminHome';
import Bill from './AlumniView/Bill';
import AlumniLogin from './Forms/AlumniLogin';
import AlumniRegister from './Forms/AlumniRegister';
main


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:(
//       <div>
//         <Header/>
//         <HomeSection/>
//       </div>
//     )
//   }
// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router}/>
  // <NavRoute/>
 main
  // <MainPage />
  <MainPage_trial />
  <MainPage />
 main
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
