import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row top-buffer">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group mt-2">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group mt-2">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group mt-2 mb-3">
              <label className="text-light">Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <div className="text-center">
              <button onClick={onSubmit} className="btn btn-success btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => (
    <div className="row top-buffer">
      <div className="col-md-6 offset-sm-3 text-center px-5">
        <div
          className="alert alert-success py-1"
          style={{ display: success ? "" : "none" }}
        >
          New account was created successfully. Please{" "}
          <Link to="/signin">Login here</Link>
        </div>
      </div>
    </div>
  );

  const errorMessage = () => (
    <div className="row top-buffer">
      <div className="col-md-2 offset-sm-5 text-center px-4">
        <div
          className="alert alert-danger py-1"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
      </div>
    </div>
  );

  return (
    <Base title="Signup page" description="A page for user to signup!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
