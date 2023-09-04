import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SlideNavbar } from './Components/SlideNavbar';
import { HomeTest } from './Components/HomeTest';
import { TopNavbar } from './Components/TopNavbar';
import { Product } from './Components/Products/Product';
import { ProductGroup } from './Components/Products/ProductGroup';
import { ItemList } from './Components/Products/ItemList';
import { InventoryManagement } from './Components/Products/InventoryManagement';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Customer } from './Components/Customers/Customer';

function App() {
  return (
    <>
    <BrowserRouter>
   <SlideNavbar/>
   <TopNavbar/>
      <Routes>
        <Route path="/" element={<HomeTest/>}/> 
        <Route path="/Products" element={<Product/>} /> 
        <Route path="/productgroup" element={<ProductGroup/>}/>
        
           <Route path="/itemlist" element={<ItemList/>} />
            <Route path="/mange_product" element={<InventoryManagement/>} />

          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/customer" element={<Customer/>}/>
         {/* <Route path="/Testimonial" element={<Testimonial/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<Nopage />} /> */}
       
      </Routes>
      {/* <Totop/>
      <Footer/> */}
    </BrowserRouter>   

</>
  );
}

export default App;
