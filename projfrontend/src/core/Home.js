import React from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";

export default function Home() {
  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
        <div className="col-4">
          <Card></Card>
        </div>
        <div className="col-4">
          <Card></Card>
        </div>
        <div className="col-4">
          <Card></Card>
        </div>
      </div>
    </Base>
  );
}
