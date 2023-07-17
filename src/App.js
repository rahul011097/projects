
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Stapwatch from './components/Stapwatch';
import  Form  from '../src/components/From.jsx'
import Header from '../src/components/Header/Header'
import CurrencyConverter from './Pages/CurrencyConverter';
import Filter from './Pages/DropDown/Filter';
import Product from './Pages/Ecommerce tools/Product';


function App() {
  return (
    <div >
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/Form' element={ <Form/>}/>
          <Route path='/CurrencyConverter' element={<CurrencyConverter/>}/>
          <Route path='/Filter' element={<Filter/>}/>
          <Route path='/Stapwatch' element={<Stapwatch/>}/>
          <Route path='/Product' element={<Product/>}/>
          
         </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
