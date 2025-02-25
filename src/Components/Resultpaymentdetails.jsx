import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Resultpaymentdetails() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    console.log(location);
    console.log(queryParams.get("success"));
    console.log(queryParams.get("pending"));
  return (
    <div>
       sdlrgmjnpoerjmpwe
    </div>
  )
}
