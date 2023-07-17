import React,{ useEffect, useState} from 'react'
import '../../Pages/Ecommerce tools/Product.css'
import useFetch from '../Ecommerce tools/useFetch'
import SingleProduct from './SingleProduct';
import Search from './Search';

const Product = () => {
    let {data}=useFetch();
  const [search,setSearch]=useState([]);
  const [filterData,setFilterData]=useState([]);

  const catagryData = data?.map((item)=>{
    return item.category;
  })
   const set = new Set(catagryData);
   const catagryDDDD = [...set]
 

  const filterHandler=(e)=>{
    const cat =e.target.value;
    const ans=data?.filter((item)=>{
      return item.category===cat
    })
    setFilterData(ans);
  }
   console.log(filterData);


    if(search.length>0){
      data=search
    }
      
    if(filterData.length>0){
      data=filterData
    }
 
     
 
  return (
    <div>
           <Search setSearch={setSearch}/>

           <div className='leftProduct'>
             {
              catagryDDDD?.map((item)=>{
                return (
                  <button value={item} onClick={filterHandler}>{item}</button>
                )
              })
             }
           </div>
        <div className='products'>
        {
           data.map((item)=>{
                return(
                    <SingleProduct  name={item.title} price={item.price} 
                    brand={item.brand} image={item.thumbnail} category={item.category}/>
                )
            })
        }

        </div>
        </div>
       
   
  )
}

export default Product