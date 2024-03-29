import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component
// Profile
// import UserProfile from "../pages/Authentication/UserProfile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Employee/AddEmployee";
// import ForgetPwd from "../pages/Authentication/ForgetPassword";
import ViewEmployees from "../pages/Employee/ViewEmployees";
import CardEmployee from "../pages/Employee/card-Employee";
import AddUser from "../pages/Employee/ExtraEmployeeDetails";


// //  // Inner Authentication
// import Login1 from "../pages/AuthenticationInner/Login";
// import Login2 from "../pages/AuthenticationInner/Login2";
// import Register1 from "../pages/AuthenticationInner/Register";
// import Register2 from "../pages/AuthenticationInner/Register2";
// import Recoverpw from "../pages/AuthenticationInner/Recoverpw";
// import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2";
// import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
// import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2";
// import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";
// import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2";
// import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail";
// import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2";
// import EmailVerification from "../pages/AuthenticationInner/auth-email-verification";
// import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2";
// import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification";
// import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2";
import TaskAdd from '../pages/Task/TaskAdd'

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import UserRegistration from "pages/Authentication/UserRegistration";
// import LoginWithOTP from "pages/Authentication/LoginWithOTP";
import Pages404 from "pages/Utility/pages-404";
import AddEmployee from "../pages/Employee/AddEmployee";
import ViewTask from "pages/Task/viewTask";
import ViewProfile from "pages/Dashboard/ViewProfile";
import TasksList from "pages/Task/tasks-list";
import Attendance from "pages/Attendance/EmployeeAttendance";
// import PostJob from "../pages/Job/PostJob";



const authProtectedRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  // { path: "/dashboard", component: Dashboard },
  // { path: "/register", component: Register },

  { path: '/logout', component: Logout },
  { path: '/remaining', component: AddUser },
  { path: '/viewtask', component: ViewTask },
  { path: '/profile', component: ViewProfile },
  { path: '/viewtasks', component: TasksList },
  { path: '/attendance', component: Attendance },

  // //profile
  // { path: "/profile", component: UserProfile },
  { path: '/task', component: TaskAdd },
  { path: "/dashboard", component: Dashboard },
  { path: '/view-employee', component: ViewEmployees },
  { path: "/add-employee", component: AddEmployee },


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  // { path: "/post-job", exact: true, component: PostJob },

  { path: "*", component: Pages404 },

];

const publicRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/login" /> },



  { path: "/login", exact: true, component: Login },
  // { path: "*", component: Pages404 },




  // Authentication Inner
  // { path: "/pages-login", component: Login1 },
  // { path: "/pages-login-2", component: Login2 },
  // { path: "/pages-register", component: Register1 },
  // { path: "/pages-register-2", component: Register2 },
  // { path: "/page-recoverpw", component: Recoverpw },
  // { path: "/page-recoverpw-2", component: Recoverpw2 },
  // { path: "/pages-forgot-pwd", component: ForgetPwd1 },
  // { path: "/auth-recoverpw-2", component: ForgetPwd2 },
  // { path: "/auth-lock-screen", component: LockScreen },
  // { path: "/auth-lock-screen-2", component: LockScreen2 },
  // { path: "/page-confirm-mail", component: ConfirmMail },
  // { path: "/page-confirm-mail-2", component: ConfirmMail2 },
  // { path: "/auth-email-verification", component: EmailVerification },
  // { path: "/auth-email-verification-2", component: EmailVerification2 },
  // { path: "/auth-two-step-verification", component: TwostepVerification },
  // { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
];

export { authProtectedRoutes, publicRoutes };
