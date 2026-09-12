"use client"
import { useState, useEffect } from "react"

export default function TrackPage(){
  const [driverLoc, setDriverLoc] = useState(null)
  const [amount, setAmount] = useState(500)

  useEffect(()=>{
    const interval = setInterval(()=>{
      const data = localStorage.getItem("driver_location")
      if(data) setDriverLoc(JSON.parse(data))
    },2000)
    return ()=> clearInterval(interval)
  },[])

  const openMap = ()=>{
    if(!driverLoc) return alert("Driver ne location share nahi ki")
    const url = `https://www.google.com/maps/dir/?api=1&destination=${driverLoc.lat},${driverLoc.lng}&travelmode=driving`
    window.open(url, "_blank")
  }

  const payUPI = ()=>{
    const upiId = "7489940011@ybl"
    const name = "RENTAL PRO"
    const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=Vehicle Rental Payment`
    window.location.href = upiLink
  }

  return (
    <div style={{padding:20}}>
      <h2>TRACK YOUR VEHICLE</h2>
      {driverLoc? <p style={{background:"orange", padding:10, borderRadius:10}}>Driver ka wait ho raha hai...</p> :
      <p style={{background:"#ffd", padding:15, borderRadius:10}}>Driver location ka wait ho raha hai</p>}
      <button onClick={openMap} style={{padding:12, background:"#4285F4", color:"white", borderRadius:8, width:"100%", marginTop:20}}>
        Google Map Me Dekho - Navigate
      </button>
      <div style={{marginTop:30, borderTop:"2px solid #ccc", paddingTop:20}}>
        <h3>Payment Karo</h3>
        <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} style={{padding:10, width:"100%"}} />
        <button onClick={payUPI} style={{padding:15, background:"green", color:"white", width:"100%", marginTop:10, borderRadius:10, fontSize:18}}>Pay with UPI - PhonePe / GPay</button>
      </div>
    </div>
  )
}
