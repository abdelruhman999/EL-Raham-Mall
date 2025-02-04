import React, { useState, createContext } from 'react';
import Navpar from '../Components/Navpar';
import { Routes, Route } from "react-router-dom";
import Navigation from '../Components/Navigation';

export const ValueContext = createContext();
export const CostContext = createContext();

export default function Home() {
  const [value, setValue] = useState(0);
  const [cost, setCost] = useState(0);

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      <CostContext.Provider value={{ cost, setCost }}>
        <div className='flex flex-col  gap-[150px]'>

        <Navpar/>
        <Navigation/>
        </div>
      </CostContext.Provider>
    </ValueContext.Provider>
  );
}
