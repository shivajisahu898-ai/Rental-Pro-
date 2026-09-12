"use client"
import { useState } from "react"

export default function DriverPage(){
  const [sharing, setSharing] = useState(false)

  const startSharing = ()=>{
    if(!navigator.geolocation) return alert("GPS support nahi hai")
    setSharing(true)
    setInterval(()=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude, time: new Date().toLocaleTimeString() }
        localStorage.setItem("driver_location", JSON.stringify(loc))
      })
    }, 5000)
  }

  return (
    <div style={{padding:20, textAlign:"center"}}>
      <h2>DRIVER PANEL</h2>
      <p>{sharing ? "✅ Live Location ON hai" : "Location share karo"}</p>
      <button onClick={startSharing} style={{padding:15, background: sharing ? "green" : "black", color:"white", width:"100%", borderRadius:10, fontSize:18}}>
        {sharing ? "Sharing Active..." : "Start Location Sharing"}
      </button>
    </div>
  )
}
