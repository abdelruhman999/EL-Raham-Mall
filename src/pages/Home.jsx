import React, { useState, createContext } from 'react';
import Navpar from '../Components/Navpar';
import { Routes, Route } from "react-router-dom";
import Navigation from '../Components/Navigation';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Example from '../Components/Example';

export const ValueContext = createContext();
export const CostContext = createContext();

export default function Home() {
  const [value, setValue] = useState(0);
  const [cost, setCost] = useState(0);

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      <CostContext.Provider value={{ cost, setCost }}>
        <div className='flex flex-col  gap-[100px]'>
        <Navpar/>

        <Routes>
          <Route path='/EL-Raham-Moll/login' element = {<Login/>}/>
          <Route path='/EL-Raham-Moll/example/' element = {<Example/>}/>
          <Route path='/EL-Raham-Moll/login/Register' element = {<Register/>}/>
        </Routes>
       

        <Navigation/>
        </div>
      </CostContext.Provider>
    </ValueContext.Provider>
  );
}
