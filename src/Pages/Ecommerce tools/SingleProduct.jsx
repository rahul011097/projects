import React from 'react'
import '../../Pages/Ecommerce tools/SingleProduct.css'
const SingleProduct = ({price,brand,image,category,name}) => {
  return (
    <div>
        <div className='product'>
           <div className='imgDiv'>
               <img src={image} alt='product'/>
           </div>
           <div className='productname'>
                {name}
           </div>
           <div className='product-price'>
           <span>{category}</span>
           <span>{brand}</span>
           </div>
         
           <div className='product-price'>
            <span>RS: {Math.floor(price*82.10)}</span>
            <button onClick={()=>alert('item is added in cart successfully')}>Add </button>
           </div>
        </div>
    </div>
  )
}

export default SingleProduct