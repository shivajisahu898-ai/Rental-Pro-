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
    // Ye link kabhi error nahi dega - 100% working
    const url = `https://www.google.com/maps/search/?api=1&query=${driverLoc.lat},${driverLoc.lng}`
    window.location.href = url
  }

  const payUPI = ()=>{
    const upiId = "7489940011@ybl"
    const upiLink = `upi://pay?pa=${upiId}&pn=RENTAL PRO&am=${amount}&cu=INR&tn=Rental Payment`
    window.location.href = upiLink
  }

  return (
    <div style={{padding:20}}>
      <h2>TRACK YOUR VEHICLE</h2>
      {driverLoc ? <p style={{background:"#d4edda", padding:15, borderRadius:10}}>✅ Driver Live Hai: {driverLoc.lat.toFixed(4)}, {driverLoc.lng.toFixed(4)}</p> : <p style={{background:"#fff3cd", padding:15, borderRadius:10}}>Driver location ka wait ho raha hai...</p>}
      <button onClick={openMap} style={{padding:15, background:"#4285F4", color:"white", borderRadius:8, width:"100%", marginTop:20, fontSize:16, border:"none"}}>📍 Google Map Me Dekho</button>
      <div style={{marginTop:30, borderTop:"2px solid #ccc", paddingTop:20}}>
        <h3>Payment Karo</h3>
        <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} style={{padding:10, width:"95%"}} />
        <button onClick={payUPI} style={{padding:15, background:"green", color:"white", width:"100%", marginTop:10, borderRadius:10, fontSize:18, border:"none"}}>Pay with PhonePe / GPay</button>
      </div>
    </div>
  )
        }
