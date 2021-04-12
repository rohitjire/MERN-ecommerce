import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManageCategories from "./admin/ManageCategories";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import AdminDashboard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashBoard";
import AddProduct from './admin/AddProduct'
import AddCategory from "./admin/AddCategory";

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
        <AdminRoute
          exact
          path="/admin/create/category"
          component={AddCategory}
        ></AdminRoute>
            <AdminRoute
          exact
          path="/admin/categories"
          component={ManageCategories}
        ></AdminRoute>
                    <AdminRoute
          exact
          path="/admin/create/product"
          component={AddProduct}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
}
