import React ,{ useState } from "react";
import "./style.css";

export default function Product(prop) {
  return (
    <div>
    <h1> From Product</h1>
    {prop.name}
    {prop.last_name}
    {prop.products.map((e) => 
    <h1>{e.name}</h1>
    )}
      </div>
  )
}