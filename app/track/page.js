"use client"
import { useState, useEffect } from 'react'
export default function TrackPage() {
  const [loc, setLoc] = useState(null)
  useEffect(() => {
    const i = setInterval(() => {
      const d = localStorage.getItem("driver_location")
      if(d) setLoc(JSON.parse(d))
    }, 2000)
    return () => clearInterval(i)
  }, [])
  if(!loc) return <div style={{padding:20}}><h3>Driver ka wait ho raha hai...</h3></div>
  return (
    <div style={{padding:20}}>
      <h2>🚖 Aapka Driver Live</h2>
      <p>Lat: {loc.lat} Lng: {loc.lng}</p>
      <a href={`https://www.google.com/maps?q=${loc.lat},${loc.lng}`} target="_blank" style={{display:"block",padding:15,background:"blue",color:"white",textAlign:"center",borderRadius:8,textDecoration:"none"}}>Map pe Dekho</a>
    </div>
  )
}
