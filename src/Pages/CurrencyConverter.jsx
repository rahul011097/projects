import React from 'react'
import axios from 'axios';
import InputField from '../components/InputField';
import { useState,useEffect } from 'react';
const CurrencyConverter = () => {
    const [input,setInput]=useState(0);
    const [output,setOutput]=useState(0);
    const [currencyRate,setCurrencyRates]=useState([]);
    const [fromcurreny,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency]=useState('USD');
    
  
     const api ='https://api.currencyapi.com/v3/latest?apikey=GJViNkvqWI1McN3kIfwSjRX6FnD76oEfnXHmQgIP';

     const fetchData =async()=>{
      const res = await fetch(api);
      const result = await res.json();
      
      setCurrencyRates(result?.data);
      // console.log(result?.data);
     }
    useEffect(()=>{
    fetchData();
    console.log(currencyRate);
    },[])

  
  //  useEffect(()=>{
  //   console.log(input);
  //  },[input]);
     
      
    const handleAmountone = (e)=>{
      console.log('input',typeof input);
      console.log(currencyRate);

      //   setOutput((input*currencyRate?.value[toCurrency])/currencyRate?.value[fromcurreny])
      //   setInput(input);
      //  console.log((input*currencyRate?.value[toCurrency])/currencyRate[fromcurreny]);
        
      }
      // console.log(input)
      const handleAmounttwo = (output)=>{
        setInput((output*currencyRate[fromcurreny])/currencyRate[toCurrency])
        setOutput(output);
        
      }
      const handleFromCurrency =(fromcurreny)=>{
        setOutput((input*currencyRate[toCurrency])/currencyRate[fromcurreny])
      setFromCurrency(fromcurreny);
      }
    
      const handleToCurrency =(toCurrency)=>{
        setInput((output*currencyRate[fromcurreny])/currencyRate[toCurrency])
      setToCurrency(toCurrency);
       }
      console.log(currencyRate);
  return (
    <div>
        <InputField Amount ={input} handle={handleAmountone} setInput={setInput} currency={fromcurreny}  onCurrencyChange ={handleFromCurrency}
curriences={Object.keys(currencyRate)} />
<InputField Amount ={output} currency={toCurrency} setInput={setInput} handle={handleAmounttwo} onCurrencyChange ={handleToCurrency}
 curriences={Object.keys(currencyRate)} />
    </div>
  )
}

export default CurrencyConverter