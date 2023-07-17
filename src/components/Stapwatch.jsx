import React, { useEffect, useState } from 'react'

const Stapwatch = () => {
      const[time,setTIme]=useState(0);
      const[timeOn,setTimeOn]=useState(false);

      useEffect(()=>{
       let interval = null;
       if(timeOn){
       interval=setInterval(()=>{
        setTIme(prevTime=>prevTime+10)
       },10)
      }else{
        clearInterval(interval);
      }
      return()=>clearInterval(interval);
      },[timeOn])

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div style={{margin:'20px',fontSize:'40px'}}>  
           <span>{(('0'+Math.floor(time/60000)%60).slice(-2))}:</span>
           <span>{(('0'+Math.floor(time/1000)%60).slice(-2))}:</span>
           <span>{(('0'+(time/10)%100).slice(-2))}</span>
        </div>
        <div>
          {
            !timeOn && time==0 &&(
              <button  style={{margin:'10px'}} onClick={()=>setTimeOn(true)}>Start</button>
            ) 
          }
     {
      timeOn &&(
        <button  style={{margin:'10px'}} onClick={()=>setTimeOn(false)}>Stop</button>
      )
     }
     
      <button  style={{margin:'10px'}} onClick={()=>setTimeOn(true)}>Resume</button>
      <button  style={{margin:'10px'}} onClick={()=>setTIme(true)}>Reset</button>
        </div>
    </div>
  )
}

export default Stapwatch