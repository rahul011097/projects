import React, { useState } from 'react'
import useFetch from '../Ecommerce tools/useFetch.js'

const Search = ({setSearch}) => {
    const {data} = useFetch();
    const [value,setValue] =useState('');
   

    const searchHandler =(e)=>{
      setValue(e.target.value)
       const input =value.toLowerCase()
      const searchResult = data?.filter((item)=>{
        return item?.title?.toLowerCase().includes(input)   
       })
       setSearch(searchResult);
    }
 
  return (
    <div>
        <div>
            <input type='text' placeholder='Search items here' value={value}  onChange={searchHandler}/>
        </div>
    </div>
  )
}

export default Search