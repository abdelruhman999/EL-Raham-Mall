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
import Saledetails from '../Components/Saledetails';
import Resultpaymentdetails from '../Components/Resultpaymentdetails';
import Previousorders from '../Components/Previousorders';
import { AUTH_KEY, Expire } from '../utils/constants';
import AboutUs from '../Components/AboutUs ';
import MainBranch from '../Components/MainBranch ';
import ContactUs from '../Components/ContactUs ';



export const datacontext = createContext()
export const totalcontext = createContext()
export const maxcontext = createContext()
export const valuecontext = createContext()
export const hiddencontext = createContext()
export const quantitycontext = createContext()
export const delivery_pricecontext = createContext()
export const Authcontext = createContext()
export const Messagecontext = createContext()
export const wordcontext = createContext()
export const logcontext = createContext()


export default function Home() {

  const [data1, setdata1] = useState([]);
  const [total,settotal] = useState(0)
  const [value , setvalue] = useState()
  const [quantity , setquantity] = useState(1)
  const [maxandmin,setmaxandmin] = useState([])
  const [hidden , sethedden] =useState(false)
  const [messagelogin, setMessagelogin] =useState('')
  const [delivery_price,setdelivery_price] = useState(0)
  const [words ,setwords] = useState('')
   const [log ,setLog] = useState()


  useEffect(() => {
    const storedData = localStorage.getItem("data1");
    if (storedData) {
      setdata1(JSON.parse(storedData));
    }
  }, []);

  
  useEffect(() => {
    if (data1.length > 0) {
     localStorage.setItem("data1", JSON.stringify(data1));
    }
  }, [data1]);

  useEffect(() => {
   const expire = localStorage.getItem(Expire)
   const givenTime = new Date(expire); 
   const currentTime = new Date(); 
    if(givenTime < currentTime){
     localStorage.removeItem(AUTH_KEY)
     localStorage.removeItem(Expire)
    setLog(false)
    } 

  }, []);


 
  return (

      <datacontext.Provider value={{ data1,setdata1 }}>
      <totalcontext.Provider value={{ total,settotal }}>
      <maxcontext.Provider value={{ maxandmin,setmaxandmin}}>
      <valuecontext.Provider value={{ value , setvalue}}>
      <hiddencontext.Provider value={{ hidden , sethedden}}>
      <quantitycontext.Provider value={{ quantity , setquantity}}>
      <delivery_pricecontext.Provider value={{ delivery_price,setdelivery_price}}>
      <Messagecontext.Provider value={{ messagelogin, setMessagelogin}}>
      <wordcontext.Provider value={{words ,setwords}}>
      <logcontext.Provider value={{log ,setLog}}>
    
        <div className='flex flex-col  gap-[20px]'>
        <Navpar/>

        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/' element = {<Products/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/ShoppingBage' element = {<ShoppingBage/>}/>
          <Route path='/:id' element = {<Productsdetails/>}/>
          <Route path='cutogry/:id' element = {<Cutogrydetails/>}/>
          <Route path='prand/:id' element = {<Branddetails/>}/>
          <Route path='sale' element = {<Saledetails/>}/>
          <Route path='/Resultpaymentdetails' element = {<Resultpaymentdetails/>}/>
          <Route path='/Previousorders' element = {<Previousorders/>}/>
          <Route path='/من نحن' element = {<AboutUs/>}/>
          <Route path='/الفرع الرئيسي' element = {<MainBranch/>}/>
          <Route path='/عنوانا' element = {<ContactUs/>}/>
         
        </Routes>

        <Navigation/>
        </div>
    
      </logcontext.Provider>
      </wordcontext.Provider>
      </Messagecontext.Provider>
      </delivery_pricecontext.Provider>
      </quantitycontext.Provider>
      </hiddencontext.Provider>
      </valuecontext.Provider>
      </maxcontext.Provider>
      </totalcontext.Provider>
      </datacontext.Provider>
     
   
  );
}
