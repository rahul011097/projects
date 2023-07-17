import React from 'react'


const DropDown = ({name,Handler}) => {

  
  return (
    
    <div>
        <select onChange={Handler}>
            {
                name?.map((item,index)=>{
                    return(
                        <option  key={index}>{item}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default DropDown