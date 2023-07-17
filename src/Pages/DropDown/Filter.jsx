import React, { useEffect, useState } from 'react'
import { countryData } from './data'


const Filter = () => {
const[country,setCountry]=useState(countryData);
const [selectCountry,setSelectCountry]=useState(country[0]);
const [state,setState]=useState(country[0]?.states);



const stateHandler =(e)=>{
  const res = country?.find((item)=>{
    return item.country_name===e.target.value
  })
  setSelectCountry(res);
 
}
useEffect(()=>{
    const stateData = selectCountry && selectCountry.states
    setState(stateData)
},[selectCountry,state,country])

  return (
    <div>
         
    <div>
        <select onChange={stateHandler}>
            {
                country?.map((item,index)=>{
                    return(
                        <option value={item.country_name} key={index}>{item.country_name}</option>
                    )
                })
            }
        </select>
    </div>
      
    <div>
        <select>
            {
                state?.map((item,index)=>{
                    return(
                        <option value={item.state_name}  key={index}>{item.state_name}</option>
                    )
                })
            }
        </select>
    </div>
    </div>
  )
}

export default Filter