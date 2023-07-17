import React from 'react'

const InputField = ({Amount,curriences,currency,setInput,onCurrencyChange,handle}) => {
  console.log('Amount' ,Amount);
  // console.log(onAmountChange);
   const fun=(e)=>{
    setInput(e.target.value);
    handle();
   }
   fun()
  return (
    <div>
        <input type='number' value={Amount} onChange={(e)=>fun(e)} />
        <select value={currency} onChange={(e)=>onCurrencyChange(e.target.value)}>
         {
            curriences.map((item,index)=>{
                return(
                    <option key={index} value={item}>{item}</option>
                )
            })
         }
        </select>
    </div>
  )
}

export default InputField