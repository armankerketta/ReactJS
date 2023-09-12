import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Products } from './ReactMilestone/Products';
import { Productsdisplay }  from './ReactMilestone/Productsdisplay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
    <>
      {/* <Products/> */}
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='/Productsdisplay/:id' element={<Productsdisplay/>}></Route>
      </Routes>
      </BrowserRouter> 
      
    </>
  );
}

export default App;
