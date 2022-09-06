import React ,{ useState } from "react";
import "./style.css";
import Product from './product'

export default function App() {
  const [data, setData]  = useState({
    name:'',
    last_name:''
  });
  const products = [
    {name:'Mobile'},{name:'PC'}
  ]
 const changeHandler = e => {
   setData({...data , [e.target.name]:e.target.value})
  }

 const  onSubmit = (e) => {
   e.preventDefault();
console.log(data)
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    <form onSubmit={onSubmit}>
      <label>Name:</label>&nbsp;
      <input type="text" name="name" onChange={changeHandler}/><br/><br/>
      <label>Last_Name:</label>&nbsp;
      <input type="text" name="last_name" onChange={changeHandler}/><br/><br/>
      <input type="submit"/>
      </form>
      <Product name={data.name} last_name={data.last_name} products= {products}/>
    </div>
  );
}
