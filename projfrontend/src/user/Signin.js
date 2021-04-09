import React, { userState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";

import { signin, autheticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = userState({
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
    signin({ emai, password })
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
                onChange={handleChange("email")}
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
    <Base title="SignIn page" description="A page for user to sign In!">
      {signInForm()}
    </Base>
  );
};

export default Signin;
