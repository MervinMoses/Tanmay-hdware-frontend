import React, { useEffect, useRef,useState } from 'react';
import $ from 'jquery';
// import {Link} from "react-router-dom";
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/js/dataTables.dataTables';
// import Multiformupdate from './Multiformupdate';
import Multiform from '../components/Multiform.js'
// import axios from 'axios';
import { useoperationContext } from '../context/OperationContext.js';



import {Link} from "react-router-dom";
    function Table(props) {
      const { data, col1, col2, col3, col4, col5 ,col6,previousPageUrl} = props?props:"";
      const {deleteTableData,updateTableData} = useoperationContext();
      const tableRef = useRef(null);
      // const [status,setState]=useState('');

  const [update, setUpdate] = useState({
    customer: {
      name: "",
      contact: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    order: {
      product: "",
      date: "",
      price: "",
      estimation: "",
    },
    product: {
      product: "",
      totalcost: "",
      profit: "",
      materialcost: "",
      factorycost: "",
      installationcost: "",
    },
    status: "",
  });
      useEffect(() => {
        const table = $(tableRef.current);
        if (!$.fn.DataTable.isDataTable(table)) {
          table.DataTable({
          });
        }
        return () => {
          table.DataTable().destroy();
        };
      }, [])
    
      const handleUpdateClick = (rowData) => {
        setUpdate(rowData);
      }
      const deleteForm=(value)=>{
        if (window.confirm("Are you sure you wanna delete the record!") == true) {
            const response = deleteTableData(value);
            if(response.data){
              console.log(response.data)
            }
            else{
              console.log("got no")
            }
            console.log(response.data)

        } else {
          alert("You Cancelled");
        }     
      }
      const submitForm = async(event) =>{
        // e.preventDefault(); // Prevent default form submission behavior
          event.preventDefault();
          const updateData = async() => {
            await updateTableData(update);
            console.log(update)
            // window.location.reload();
          }
          updateData();      
    }
    

      return (
        <>
        <div className="card mb-4 my-5 mx-5" >
          
            <div className="offcanvas offcanvas-bottom position-absolute top-10 start-50 translate-middle rounded-4 m-5" tabIndex="-1" id="offcanvasupdate" aria-labelledby="offcanvasBottomLabel" style={{top:'15vh',minHeight:'700px',width:'80vh'}}>
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Order Update</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body small" >
                {/* <Multiformupdate update={update}/> */}
                <Multiform action="update" update={update}/>

              </div>
            </div>
      
          <div className="card-body ">
            <div className="table-responsive">
              <table  className="table table-sm  border-200 fs--1 mb-0 " id="myTable" width="100%" cellSpacing="0" ref={tableRef}>
                <thead>
                  <tr>
                    <th>{col1}</th>
                    <th>{col2}</th>
                    <th>{col3}</th>
                    <th>{col4}</th>
                    <th>{col5}</th>
                    <th>{col6}</th>

                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>{col1}</th>
                    <th>{col2}</th>
                    <th>{col3}</th>
                    <th>{col4}</th>
                    <th>{col5}</th>
                    <th>{col6}</th>

                  </tr>
                </tfoot>
                <tbody >
                  {data && data.map(qry => (
                    <tr  className="custompadding" key={qry._id}>
                      <td >{qry.customer.name}</td>
                      <td >
                        {qry.order.date}
                        </td>
                      <td >
                        {qry.product.product}
                        </td>
                      <td >
                        {qry.order.estimation}
                        </td>
                        <td >
                        {qry.user_id}
                        </td>
                      <td ><span className={`badge rounded-pill text-bg-${qry.status=='Placed'?"primary":qry.status=='Dispatched'?'warning':"success"}`}>{qry.status}</span></td>
                        <div className='row m-2'>
                         <a className="nav-link" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-mail mx-2">
                         <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
                             </svg> 
                             </a>
                              <ul className="dropdown-menu" style={{width:"10px"}}>
                                <li><Link className="dropdown-item" href="" onClick={() => handleUpdateClick(qry)} 
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasupdate" 
                                    aria-controls="offcanvasBottom">Update</Link></li>
                                 <li><Link className="dropdown-item" href="" to ={`${previousPageUrl}/product/${qry._id}`}
                                    >View</Link></li>
                                {/* <li><a onClick={deleteForm(qry)} className="dropdown-item" href="">Delete</a></li> */}
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setUpdate(qry)}>
                                          Change Status</Link></li>
                                <li><Link className="dropdown-item" href="" to ={`${previousPageUrl}/billing/${qry._id}`}
                                    >Add to Billing</Link></li>         
                                <li><Link className="dropdown-item text-danger" href="" value="hii" onClick={() => deleteForm(qry._id)} >Delete</Link></li>
                              </ul>
                        </div>
                      
                    </tr>

         
                  ))}
                
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{update.status}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <select className="form-select" aria-label="Default select example"
                    value={update.status}
                    onChange={(e)=> setUpdate((data) => ({...data,status:e.target.value}))}
                  >
                    <option value="Placed">Placed</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Completed">Completed</option>
                  </select>                  
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <Link type="button" className="btn btn-primary" onClick={submitForm}>Save changes</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>

      {/* <div id="tableExample" data-list="{&quot;valueNames&quot;:[&quot;name&quot;,&quot;email&quot;,&quot;age&quot;],&quot;page&quot;:5,&quot;pagination&quot;:true}">
        <div className="table-responsive mx-n1 px-1">
          <table className="table table-sm border-top border-200 fs--1 mb-0">
            <thead>
              <tr>
              
                <th className="sort align-middle ps-3" data-sort="name">Name</th>
                <th className="sort align-middle" data-sort="email">Email</th>
                <th className="sort align-middle" data-sort="age">Age</th>
                <th className="sort text-end align-middle pe-0" scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody className="list" id="bulk-select-body">
            {data && data.map(qry => (
              <tr>
              
                <td className="align-middle ps-3 name">Anna</td>
                <td className="align-middle email">anna@example.com</td>
                <td className="align-middle age">18</td>
                <td className="align-middle white-space-nowrap text-end pe-0">
                  <div className="font-sans-serif btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs--2" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><svg className="svg-inline--fa fa-ellipsis fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"></path></svg> <span className="fas fa-ellipsis-h fs--2"></span> </button>
                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                      <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                    </div>
                  </div>
                </td>
              </tr>
             ))}
              </tbody>
          </table>
        </div>
    
      </div> */}
    </>
      )
    }
  
    
export default Table



