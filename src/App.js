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
import {Vendor} from './Components/Vendors/Vendor';
import { Invoice } from './Components/Vendors/Invoice';
import { CInvoice } from './Components/Customers/Invoice';
import { Sales } from './Components/Customers/Sales';
import { Sales_Return } from './Components/Customers/Sales_Return';
import { Payment_Received } from './Components/Customers/Payment_Received';
import { Manage_Vendors } from './Components/Vendors/Manage_Vendors';
import { Manage_Customers } from './Components/Customers/Manage_Customers';
import { Purchase_Order } from './Components/Vendors/Purchase_Order';
import { Vendor_Credits } from './Components/Vendors/Vendor_Credits';
import { Credit_Note } from './Components/Customers/Credit_Note';
import { Purchase_Return } from './Components/Vendors/Purchase_Return';


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
            <Route path="/manage_product" element={<InventoryManagement/>} />

          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/vendor" element={<Vendor/>} />
          <Route path="/VendorInvoice" element={<Invoice/>} />
          <Route path="/CustomerInvoice" element={<CInvoice/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/salesReturn" element={<Sales_Return/>} />
          <Route path="/PaymentReceived" element={<Payment_Received/>} />
          <Route path="/CreditNote" element={<Credit_Note/>} />
          <Route path="/ManageCustomers" element={<Manage_Customers/>} />
          <Route path="/PurchaseOrder" element={<Purchase_Order/>} />
          <Route path="/vendorCredits" element={<Vendor_Credits/>} />
          <Route path="/PurchaseReturn" element={<Purchase_Return/>} />
          <Route path="/ManageVendors" element={<Manage_Vendors/>} />



         {/* <Route path="*" element={<Nopage />} /> */}
       
      </Routes>
      {/* <Totop/>
      <Footer/> */}
    </BrowserRouter>   

</>
  );
}

export default App;
