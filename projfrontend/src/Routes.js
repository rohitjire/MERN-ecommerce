import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import AdminDashboard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashBoard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute
          exact
          path="/user/dashboard"
          component={UserDashboard}
        ></PrivateRoute>
        <AdminRoute
          exact
          path="/admin/dashboard"
          component={AdminDashboard}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
}
