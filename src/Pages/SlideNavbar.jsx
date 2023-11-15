import React from 'react'
import { NavLink } from 'react-router-dom'

export const SlideNavbar = () => {
  return (
    <>
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex">
        {/* <svg className="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#full"></use>
        </svg>
        <svg className="sidebar-brand-narrow" width="46" height="46" alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#signet"></use>
        </svg> */}
      </div>
      <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li className="nav-item"><a className="nav-link" href="index.html">
            <svg className="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
            </svg> Dashboard<span className="badge badge-sm bg-info ms-auto">NEW</span></a></li>
            <li className="nav-item"><NavLink to="/products" className="nav-link">
            <svg className="nav-icon">
             
            </svg> Products</NavLink></li>
       
       
       
        <li className="nav-title">Details</li>
        <li className="nav-item"><NavLink to="/customer" className="nav-link">
            <svg className="nav-icon">
             
            </svg> Customers</NavLink></li>
      
        <li className="nav-item"><NavLink to="/vendor" className="nav-link">
            <svg className="nav-icon">
             
            </svg> Vendors</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">
            <svg className="nav-icon">
             
            </svg> Report</NavLink></li>
            
         
       
        <li className="nav-item"><NavLink to className="nav-link nav-link-danger"  target="_top">
           
           
          </NavLink></li>
      </ul>
      <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
    </div>
    
    </>
  )
}
