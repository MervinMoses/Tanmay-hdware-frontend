import { CardActionArea, Grid } from '@mui/material'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import React, {  
  useState,
  useEffect } from 'react'

export const Customer = () => {
  const [dispatched,setDispatched]=useState();
  const [placed,setPLaced]=useState();
  const [completed,setCompleted]=useState();


  let total = placed+dispatched+completed; 

  const dispatchpercentage = Math.round((dispatched / total) * 100);
  const dispatchcompleted = Math.round((completed / total) * 100);

  return (
    <>
 <div>
    <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Products</h1>
            {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              
                <div className="card border-left-primary shadow h-100 py-2">
                
                    <div className="card-body">
                    <NavLink to="/sales">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Sales</div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <NavLink to="/CustomerInvoice">

                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Invoice</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{placed}</div>
                            </div>
                        
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <NavLink to="/salesReturn">

                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Sales returns</div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{dispatched}</div>
                            </div>
                       
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <NavLink to="/CreditNote">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Credit Note</div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{dispatched}</div>
                            </div>
                       
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <NavLink to="/PaymentReceived">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Payment Received</div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{dispatched}</div>
                            </div>
                       
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <NavLink to="/ManageCustomers">

                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Manage Customer</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{completed}</div>
                            </div>
                         
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
          
        </div>
      
             
                
                    
                    <div className="card-body">
                        <p><b>Welcome to our Inventory Management System</b></p>
                        <p>Our system is designed to help interior design businesses manage their operations efficiently and effectively. With our system, you can easily store and manage information such as enquiry details, order details, and order status updates such as placed orders, dispatched orders and completed orders</p>
                        <p className="mb-0">Our system provides you with a convenient dashboard that displays the progress of your orders and the status of your enquiries, allowing you to track everything in one place. You can easily monitor the progress of your orders and make informed decisions based on the information provided in the dashboard.</p>
                        <p className="mb-0">Our Interior Design Business Management System is user-friendly and intuitive, ensuring that you can easily navigate and use it without any difficulty. It is a reliable and efficient system that is designed to meet the unique needs of your interior design business.</p>
                        <p className="mb-0">With our system, you can streamline your business operations and increase your productivity, enabling you to focus on what really matters - delivering high-quality interior design services to your clients.</p>
                        
                </div>
        </div>
    </div>



    </>
  );
};
