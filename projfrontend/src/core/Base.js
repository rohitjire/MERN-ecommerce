import React from "react";
import Menu from './Menu'

const Base = ({
    title = "My Title",
    description="My description",
    className=" text-white p-4",
    children
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron  text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>

      {/* <footer className="footer bg-dark mt-auto ">
        <div className="container-fluid bg-success text-white text-center py-1">
          <h4>If you got any questions, fell free to reach out!</h4>
          <button className="btn btn-warning btn-lg py-1">Contact Us</button>
        </div>
        <div className="container text-center">
          <span className="text-muted">An Amazing place to buy tshirt</span>
        </div>
      </footer> */}
    </div>
  );
};

export default Base;
