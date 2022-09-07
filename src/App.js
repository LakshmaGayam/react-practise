import React from "react";
import NavBar from './nav'
import {  Routes, Route } from "react-router-dom";
import DashBoard from './dashboard'
import Product from './product';
import Home from './home';
export default function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/home' element={<Home/>}/>

        </Routes>
    </div>
  );
}
