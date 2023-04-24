import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='abc'>
<img src="src/images/HallFinder-1 (2).png" width="150px" style={{marginTop:"0px"}} />
<div style={{marginBottom:"50px",marginLeft:"200px" ,display:"flex", flexDirection:"column", justifyContent:"space-around", height:"100px", width:"100%", flexWrap:"wrap"}}><h1 style={{color:"#112D32", textAlign:"center", fontSize:"50px",fontFamily:"Wanderlust"}}>Welcome to HallFinder</h1>
<h2 style={{fontFamily:"Wanderlust"}}>
Effortless Booking Process
</h2>
<div><button className='btn'><a href='#data' style={{textDecoration:"none", color:"#88BDBC", fontFamily:"Wanderlust"}}>Getting Started</a></button></div></div></div>
    <App />
  </React.StrictMode>,
)
