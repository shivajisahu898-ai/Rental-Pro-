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
}"use client"
import { useState, useEffect } from "react"

export default function TrackPage(){
  const [driverLoc, setDriverLoc] = useState(null)
  const [amount, setAmount] = useState(500)

  useEffect(()=>{
    const interval = setInterval(()=>{
      const data = localStorage.getItem("driver_location")
      if(data) setDriverLoc(JSON.parse(data))
    }, 2000)
    return ()=> clearInterval(interval)
  },[])

  // Sahi Google Map Link - intent:// nahi, https:// hai
  const openMap = () => {
    if(!driverLoc) return alert("Driver ne location share nahi ki")
    const url = `https://www.google.com/maps/dir/?api=1&destination=${driverLoc.lat},${driverLoc.lng}&travelmode=driving`
    window.open(url, "_blank")
  }

  // UPI Payment - Ye sab UPI App me khulega
  const payUPI = () => {
    const upiId = "shivaji@okicici" // <-- Yaha apna UPI ID daalo
    const name = "RENTAL PRO"
    // UPI ka sahi link
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=Vehicle Rental Payment`
    window.location.href = upiUrl

    // Agar UPI App na ho to QR fallback
    setTimeout(()=>{
      alert("Agar UPI App nahi khula to PhonePe / GPay se is UPI pe payment karo: " + upiId)
    }, 2000)
  }

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h2>📍 TRACK YOUR VEHICLE</h2>

      {!driverLoc? <p style={{background:'orange', padding:10, borderRadius:8}}>Driver ka wait ho raha hai...</p> :
      <div style={{background:'#e8f5e9', padding:15, borderRadius:10}}>
        <p><b>Driver Live Hai:</b> {driverLoc.lat.toFixed(5)}, {driverLoc.lng.toFixed(5)}</p>
        <button onClick={openMap} style={{padding:12, background:'#1a73e8', color:'white', borderRadius:8, width:'100%', marginTop:10}}>
          🗺️ Google Map Me Dekho - Navigate
        </button>
      </div>}

      <div style={{marginTop:30, borderTop:'2px solid #ccc', paddingTop:20}}>
        <h3>💰 Payment Karo</h3>
        <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} style={{padding:10, width:'100%', border:'1px solid #ccc', borderRadius:8}} placeholder="Amount"/>
        <button onClick={payUPI} style={{padding:15, background:'green', color:'white', borderRadius:10, width:'100%', fontSize:18, marginTop:10, fontWeight:'bold'}}>
          UPI Se Pay Karo - GPay / PhonePe
        </button>
        <p style={{fontSize:12, marginTop:5}}>UPI ID: shivaji@okicici</p>
      </div>
    </div>
  )
}
      
