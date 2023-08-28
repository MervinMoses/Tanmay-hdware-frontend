import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SlideNavbar } from './Components/SlideNavbar';
import { HomeTest } from './Components/HomeTest';
import { TopNavbar } from './Components/TopNavbar';
import { Product } from './Components/Products/Product';

function App() {
  return (
    <>
    <BrowserRouter>
   <SlideNavbar/>
   <TopNavbar/>
      <Routes>
        <Route path="/" element={<HomeTest/>}/> 
        <Route path="/Products" element={<Product/>} /> 
        {/* <Route path="/Home" element={<Home/>}/>
          <Route index element={<Home />} /> */}
           <Route path="/Home" element={<HomeTest/>} />
           {/* <Route path="/About" element={<About/>} />

          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/ConnectWithUs" element={<ConnectWithUs/>}/>
          <Route path="/Testimonial" element={<Testimonial/>} />

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
