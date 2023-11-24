import React from 'react'
import { NavLink } from 'react-router-dom'

export const SlideNavbar = () => {
  return (
    <>
      <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
        <div className="sidebar-brand d-none d-md-flex justify-content-center align-items-center">
          <svg className="sidebar-brand-full" width="180" height="80" alt="CoreUI Logo">
            <use xlinkHref="assets/brand/logo.svg#full"></use>
          </svg>
        </div>
        <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
          <li className="nav-item"><NavLink to="/" className="nav-link">
            <svg className="nav-icon">

            </svg> Dasboard</NavLink></li>
          <li className="nav-item"><NavLink to="/report" className="nav-link">
            <svg className="nav-icon">

            </svg>Report</NavLink></li>
          <li className="nav-item"><NavLink to="/support" className="nav-link">
            <svg className="nav-icon">

            </svg>Help & Support</NavLink></li>

          <li className="nav-item"><NavLink to="/settings" className="nav-link">
            <svg className="nav-icon">

            </svg> Settings</NavLink></li>
        </ul>
        <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
      </div>

    </>
  )
}
