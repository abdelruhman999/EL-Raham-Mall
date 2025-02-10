import React, { useState, createContext, useEffect } from 'react';
import Navpar from '../Components/Navpar';
import { Routes, Route } from "react-router-dom";
import Navigation from '../Components/Navigation';
import Login from '../Components/Login';
import Register from '../Components/Register';
import ShoppingBage from '../Components/ShoppingBage';
import Products from '../Components/Products';
import Productsdetails from '../Components/Productsdetails';


export const datacontext = createContext()
export const totalcontext = createContext()


export default function Home() {

  const [data1, setdata1] = useState([]);
  const [total,settotal] = useState(0)
  
  // useEffect(() => {
  //   if (data1.length > 0) {
  //     window.localStorage.setItem("data1", JSON.stringify(data1));
  //   }
  // }, [data1]);

  // useEffect(()=>{
  //   window.localStorage.setItem("count",value)
    
  // },[value])
  return (
  
      
      <datacontext.Provider value={{ data1,setdata1 }}>
      <totalcontext.Provider value={{ total,settotal }}>
        <div className='flex flex-col  gap-[100px]'>
        <Navpar/>
        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/' element = {<Products/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/ShoppingBage' element = {<ShoppingBage/>}/>
          <Route path='/:id' element = {<Productsdetails/>}/>
        </Routes>
       

        <Navigation/>
        </div>
      </totalcontext.Provider>
      </datacontext.Provider>
     
   
  );
}
