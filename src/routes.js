import React from "react";

export const routes = {
  root: {
    path: "/",
    component: React.lazy(() =>
      import("./components/Dashboard" /* webpackChunkName: "Home" */)
    ),
  },
  signUp: {
    path: "/signup/",
    component: React.lazy(() =>
      import("./components/Signup" /*webpackChunkName: "SignUp"*/)
    ),
  },
  logIn: {
    path: "/login/",
    component: React.lazy(() =>
      import("./components/Login" /*webpackChunkName: "LogIn"*/)
    ),
  },
  upDate: {
    path: "/update-profile/",
    component: React.lazy(() =>
      import("./components/UpdateProfile" /*webpackChunkName: "UpdateProfile"*/)
    ),
  },
  forgotPass: {
    path: "/forgot-password/",
    component: React.lazy(() =>
      import(
        "./components/ForgotPassword" /*webpackChunkName: "ForgotPassword"*/
      )
    ),
  },
};
