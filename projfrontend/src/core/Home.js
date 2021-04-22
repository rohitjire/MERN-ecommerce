import React, { useState, useEffect } from "react";
import { getProducts } from "../admin/helper/adminapicall";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";

export default function Home() {
  const [Produtcs, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts()
  }, [])

  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
        <h1 className="text-white">All of Tshirts</h1>
        <div className="row mt-5">
          {Produtcs.map((product,index)=>{
            return(
              <div key={index}className="col-3 mb-4">
                <Card product = {product}>

                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </Base>
  );
}
