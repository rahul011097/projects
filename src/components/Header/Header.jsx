import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
 
 
  return (
    <div className='App'>
      <Link to ='/Form'>Form</Link>
      <Link to ='/CurrencyConverter'>Curreny Converter</Link>
      <Link to ='/Filter'>DropDown</Link>
      <Link to ='/Stapwatch'>Stopwatch</Link>
      <Link to ='/Product'>Ecommerce Tools</Link>
    </div>
  )
}

export default Header