import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";

import { signin, autheticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    emai: "",
    password: "",
    error: "",
    laoding: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: true, loading: false });
        } else {
          autheticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("Signedin Request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <p>redirect to admin</p>;
      } else {
        return <p>redirect to user dashboad</p>;
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/"></Redirect>;
    }
  };

  const signInForm = () => {
    return (
      <div className="row top-buffer">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group mt-2">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                className="form-control"
                value={email}
                type="email"
              />
            </div>
            <div className="form-group mt-2 mb-3">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                value={password}
                type="password"
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

  const loadingMessage = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
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
    <Base title="SignIn page" description="A page for user to sign In!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
