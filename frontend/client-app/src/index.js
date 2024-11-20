import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import RegistrationForm from './demoReg';
import AdminLogin from './AdminView/AdminLogin';
import Register from './Forms/Register';
import DepartmentMgmt from './AdminView/DeptMgmt';
import ProgramMgmt from './AdminView/ProgramMgmt';
import MainPage from './Components/MainPage';
import Feedback from './Forms/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MainPage /> */}
    <Register />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
