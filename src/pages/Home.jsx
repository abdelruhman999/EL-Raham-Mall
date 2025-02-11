import React, { useState, createContext, useEffect } from 'react';
import Navpar from '../Components/Navpar';
import { Routes, Route } from "react-router-dom";
import Navigation from '../Components/Navigation';
import Login from '../Components/Login';
import Register from '../Components/Register';
import ShoppingBage from '../Components/ShoppingBage';
import Products from '../Components/Products';
import Productsdetails from '../Components/Productsdetails';
import Cutogrydetails from '../Components/Cutogrydetails';
import Branddetails from '../Components/Branddetails';


export const datacontext = createContext()
export const totalcontext = createContext()
export const maxcontext = createContext()


export default function Home() {

  const [data1, setdata1] = useState([]);
  const [total,settotal] = useState(0)
   const [maxandmin,setmaxandmin] = useState([])
  // const [min,setmin] = useState()
  
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
      <maxcontext.Provider value={{ maxandmin,setmaxandmin}}>
        <div className='flex flex-col  gap-[100px]'>
        <Navpar/>
        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/' element = {<Products/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/ShoppingBage' element = {<ShoppingBage/>}/>
          <Route path='/:id' element = {<Productsdetails/>}/>
          <Route path='cutogry/:id' element = {<Cutogrydetails/>}/>
          <Route path='prand/:id' element = {<Branddetails/>}/>
        </Routes>
       

        <Navigation/>
        </div>
      </maxcontext.Provider>
      </totalcontext.Provider>
      </datacontext.Provider>
     
   
  );
}
