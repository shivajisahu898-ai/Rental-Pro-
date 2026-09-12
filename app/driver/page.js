"use client"
import { useState, useEffect } from "react"

export default function DriverPage(){
  const [sharing, setSharing] = useState(false)
  const [loc, setLoc] = useState(null)

  useEffect(()=>{
    if(!sharing) return
    const id = navigator.geolocation.watchPosition(
      (pos)=>{
        const data = { lat: pos.coords.latitude, lng: pos.coords.longitude, time: new Date().toISOString() }
        setLoc(data)
        // Customer ke liye save kar rahe hai
        localStorage.setItem("driver_location", JSON.stringify(data))
        // Agar Firebase use karte ho to yaha save karo
      },
      (err)=> alert(err.message),
      { enableHighAccuracy: true }
    )
    return ()=> navigator.geolocation.clearWatch(id)
  },[sharing])

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h2>🚚 DRIVER PANEL - RENTAL.PRO</h2>
      <button onClick={()=>setSharing(!sharing)} style={{padding:15, background: sharing?'red':'green', color:'white', borderRadius:10, width:'100%', fontSize:18}}>
        {sharing? "Stop Sharing" : "Start Location Sharing"}
      </button>
      {loc && <div style={{marginTop:20, background:'#eee', padding:15, borderRadius:10}}>
        <p>Lat: {loc.lat}</p>
        <p>Lng: {loc.lng}</p>
        <p style={{color:'green'}}>✓ Customer aapko live dekh pa raha hai</p>
      </div>}
    </div>
  )
