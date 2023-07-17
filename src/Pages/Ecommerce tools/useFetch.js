import { useState, useEffect } from "react";


export default function useFetcher(){
  const [data,setData]=useState([]);

  const fetchData =async()=>{
  const res = await fetch('https://dummyjson.com/products');
  const result  = await res.json();
  setData(result.products);
  }
  

  useEffect(()=>{
    fetchData();
  },[])
   
  return {data};
}