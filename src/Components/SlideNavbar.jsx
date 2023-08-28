import React from 'react'
import { NavLink } from 'react-router-dom'

export const SlideNavbar = () => {
  return (
    <>
    <div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div class="sidebar-brand d-none d-md-flex">
        <svg class="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#full"></use>
        </svg>
        <svg class="sidebar-brand-narrow" width="46" height="46" alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#signet"></use>
        </svg>
      </div>
      <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li class="nav-item"><a class="nav-link" href="index.html">
            <svg class="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
            </svg> Dashboard<span class="badge badge-sm bg-info ms-auto">NEW</span></a></li>
            <li class="nav-item"><a class="nav-link" href="charts.html">
            <svg class="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
            </svg> Products</a></li>
       
       
       
        <li class="nav-title">Details</li>
        <li class="nav-item"><a class="nav-link" href="colors.html">
            <svg class="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-drop"></use>
            </svg> Colors</a></li>
      
        <li class="nav-item"><a class="nav-link" href="charts.html">
            <svg class="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
            </svg> Charts</a></li>
            <li class="nav-item"><a class="nav-link" href="charts.html">
            <svg class="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
            </svg> Charts</a></li>
            <li class="nav-item"><a class="nav-link" href="charts.html">
            <svg class="nav-icon">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
            </svg> Charts</a></li>
         
       
        <li class="nav-item"><a class="nav-link nav-link-danger" href="https://coreui.io/pro/" target="_top">
           
           
          </a></li>
      </ul>
      <button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
    </div>
    
    </>
  )
}
