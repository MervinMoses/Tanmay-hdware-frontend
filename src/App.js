import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SlideNavbar } from './Pages/SlideNavbar';
import { HomeTest } from './Pages/HomeTest';
import { TopNavbar } from './Pages/TopNavbar';
import { Product } from './Pages/Products/Product';
import { ProductGroup } from './Pages/Products/ProductGroup';
import { ItemList } from './Pages/Products/ItemList';
import { InventoryManagement } from './Pages/Products/InventoryManagement';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Customer } from './Pages/Customers/Customer';
import {Vendor} from './Pages/Vendors/Vendor';
import { Invoice } from './Pages/Vendors/Invoice';
import { CInvoice } from './Pages/Customers/Invoice';
import { Sales } from './Pages/Customers/Sales';
import { Sales_Return } from './Pages/Customers/Sales_Return';
import { Payment_Received } from './Pages/Customers/Payment_Received';
import { Manage_Vendors } from './Pages/Vendors/Manage_Vendors';
import { Manage_Customers } from './Pages/Customers/Manage_Customers';
import { Purchase_Order } from './Pages/Vendors/Purchase_Order';
import { Vendor_Credits } from './Pages/Vendors/Vendor_Credits';
import { Credit_Note } from './Pages/Customers/Credit_Note';
import { Purchase_Return } from './Pages/Vendors/Purchase_Return';
import  ForgotPassword  from './Pages/ForgotPassword'

function App() {
  return (
    <>
     <BrowserRouter>
        <SlideNavbar/>
        <div class="wrapper d-flex flex-column min-vh-100 bg-light">
        <header class="header header-sticky mb-4">    
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
          <Route path="/reset" element={<ForgotPassword/>} />


         {/* <Route path="*" element={<Nopage />} /> */}
       
      </Routes>
      {/* <Totop/>
      <Footer/> */}
    </header> 
    </div>
    </BrowserRouter>    

</>
  );
}

export default App;
