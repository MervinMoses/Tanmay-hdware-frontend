import React, { useEffect, useState } from 'react'
import MainTable from '../components/MainTable.js'
import Multiform from '../components/Multiform.js'
import Loading from '../components/Loading.js';


function DisplayAll() {
    const [getstate,setState]=useState(null)
    const [loading,setLoading]=useState(true)
    const previousPageUrl = window.location.href;
    useEffect(() => {
      const fetchData = async() => {
        const data = await fetchTableData('');
        setState(data);
        console.log(data)
      }
      fetchData();
        setLoading(false)
      },setState);
      
  return (
    <>
   <h1 className="h3 mb-2 text-gray-800 mx-5">All</h1>
<p className="mb-4 mx-5">You can Start Adding details by Clicking on Add Details toggle</p>
<button className="btn btn-primary mx-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Add details</button>
<div className="offcanvas offcanvas-bottom position-absolute top-10 start-50 translate-middle rounded-4 m-5" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{top:'45vh',height:'95vh',width:'80vh'}}>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Order Placement</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small" >
  <Multiform action="add"/>
  </div>
</div>
{ loading && <Loading/> } 
{getstate && 
<MainTable 
      data={getstate} 
      col1={"Name"} 
      col2={"Order Date"}
      col3={"Product"} 
      col4={"Estimation Delivery"}
      col5={"Updated By"}
      col6={"Status"}
      previousPageUrl={previousPageUrl}
  />
}
</> 
)
}

export default DisplayAll