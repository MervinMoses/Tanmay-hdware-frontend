import React, { useState ,useEffect} from 'react'
// import axios from 'axios';
import { useoperationContext } from '../context/OperationContext.js';

function Multiform(props) {
  const { update,action } = props?props:"";
  const {deleteTableData,addTableData,updateTableData} = useoperationContext();

  useEffect(() => {
    update && setData(update)
  },[update])

  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < 3) {
    setCount(count + 1);
    }
    console.log(count)
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    console.log(count)

  };
  const [data, setData] = useState({
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
    status: "Placed",
  });
  const deleteForm=()=>{
    if (window.confirm("Are you sure you wanna delete the record!") == true) {
      const reponse =  deleteTableData(data._id);
      console.log({reponse})
        // alert("Record Deleted");
        // window.location.reload();
    } else {
      alert("You Cancelled");
    }       
  }
  const submitForm = async(event) =>{
    // e.preventDefault(); // Prevent default form submission behavior
       event.preventDefault();
    if(action == "add"){
      const addData = async() => {
        console.log({data});
        const reponse = await addTableData(data);
        // window.location.reload();
        console.log({reponse})
      }
      addData();   
    }
    else if(action == "update"){
      const updateData = async() => {
        await updateTableData(data);
        // window.location.reload();
        console.log("updated")
      }
      updateData();      
}
}
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const category = name.split(".")[0]; // get category (customer, order, or product)
    const field = name.split(".")[1]; // get field (name, contact, email, etc.)
    setData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }));
  };
  return (
<>
<div className="progress my-1 absolute" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:`${count == '1'? "10":count == '2'? "40":count == '3'? "100":'0'}%`}}></div>
</div>
  <div className="card-body border-0">
  <div className="">
  <form className=''>
  <div className={`row g-3 ${count == '1'? "":'d-none'}`}>
  <h5 className="">Customer Details</h5>
      <div className="col-md-6">
        <label htmlFor="" className="form-label">Name</label>
        <input type="text" className="form-control" id="" 
            name="customer.name"
            value={data.customer.name}
            onChange={handleInputChange}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="" className="form-label">Contact Number</label>
        <input type="number" className="form-control" id=""
            name="customer.contact"
            value={data.customer.contact}
            onChange={handleInputChange}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="" className="form-label">Email</label>
        <input type="text" className="form-control" id=""
            name="customer.email"
            value={data.customer.email}
            onChange={handleInputChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="" className="form-label">Address</label>
        <textarea type="text" className="form-control" id="inputAddress" placeholder=""
            name="customer.address"
            value={data.customer.address}
            onChange={handleInputChange}
        />
      </div>
      <div className="col-md-5">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity"
              name="customer.city"
              value={data.customer.city}
              onChange={handleInputChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-control"
              name="customer.state"
              value={data.customer.state}
              onChange={handleInputChange}

        >
            <option selected>Choose...</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
        </select>

      </div>
      <div className="col-md-3">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip"
        name="customer.zip"
        placeholder="Zip"
        value={data.customer.zip}
        onChange={handleInputChange}
        />
      </div>
 
  </div>
  <div className={`row g-3 ${count == '2'? "":'d-none'}`}>

  <h5 className="">Order Details</h5>
      <div className="col-md-12">
        <label htmlFor="" className="form-label">Product</label>
        <select id="inputState" className="form-control"
              name="order.product"
              value={data.order.product}
              onChange={handleInputChange}        
              >
            <option selected>Choose...</option>
            <option>Modular Wardrobe</option>
            <option>Modular Kitchen</option>
            <option>Tv Unit</option>
            <option>Customised Cot</option>
            <option>Modular Pooja Unit</option>

        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Placed Date</label>
        <input type="date" className="form-control" id="inputPassword4"
        name="order.date"
        value={data.order.date}
        onChange={handleInputChange}
        />
      </div>
      <div className="col-6">
        <label htmlFor="inputAddress" className="form-label">Price Quoted</label>
        <div className="input-group">
        <span className="input-group-text">₹</span>
        <input type="text" className="form-control" id="inputAddress" placeholder=""
         name="order.price"
         value={data.order.price}
         onChange={handleInputChange}/>
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Dispatched Estimation</label>
        <input type="date" className="form-control" id="inputAddress2" placeholder=""
        name="order.estimation"
        value={data.order.estimation}
        onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 mx-3 form-check">
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Customer address as delivery address</label> */}
     </div>
    { update &&
        <div className="col-12">
        <label htmlFor="inputState" className="form-label">Status</label>
        <select id="inputState" className="form-control"
              name="order.status"
              value={data.status}
              onChange={(e)=> setData((data) => ({...data,status:e.target.value}))}
        >
            <option selected>Choose...</option>
            <option>Placed</option>
            <option>Dispatched</option>
            <option>Completed</option>
        </select>
      </div>
}
  </div>
  <div className={`row g-3 ${count == '3'? "":'d-none'}`}>

<h5 className="">Product Details(Optional)</h5>
    <div className="col-md-12">
      <label htmlFor="" className="form-label">Product</label>
      <select id="inputState" className="form-control"
              name="product.product"
              value={data.order.product}
              onChange={handleInputChange}        
              disabled>
            <option selected>Choose...</option>
            <option>Modular Wardrobe</option>
            <option>Modular Kitchen</option>
            <option>Tv Unit</option>
            <option>Customised Cot</option>
            <option>Modular Pooja Unit</option>

        </select>
    </div>
    <div className="col-md-12">
      <label htmlFor="inputAddress" className="form-label">Total Cost</label>
      <div className="input-group">
      <span className="input-group-text">₹</span>
      <input type="number" className="form-control" id="inputAddress" placeholder=""
       name="product.totalcost"
       value={data.product.totalcost}
       onChange={handleInputChange}
      required/>
      </div>
    </div>
    <div className="col-6">
      <label htmlFor="inputAddress" className="form-label">Profit</label>
      <div className="input-group">
      <span className="input-group-text">₹</span>
      <input type="number" className="form-control" id="inputAddress" placeholder=""
       name="product.profit"
       value={data.product.profit}
       onChange={handleInputChange}
      />
      </div>
    </div>
    <div className="col-6">
      <label htmlFor="inputAddress" className="form-label">Material Cost</label>
      <div className="input-group">
      <span className="input-group-text">₹</span>
      <input type="number" className="form-control" id="inputAddress" placeholder=""
      name="product.materialcost"
      value={data.product.materialcost}
      onChange={handleInputChange}
      />
      </div>
    </div>
    <div className="col-6">
      <label htmlFor="inputAddress" className="form-label">Factory Cost</label>
      <div className="input-group">
      <span className="input-group-text">₹</span>
      <input type="number" className="form-control" id="inputAddress" placeholder=""
      name="product.factorycost"
      value={data.product.factorycost}
      onChange={handleInputChange}
      />
      </div>
    </div>
    <div className="col-6">
      <label htmlFor="inputAddress" className="form-label">Installation Cost</label>
      <div className="input-group">
      <span className="input-group-text">₹</span>
      <input type="number" className="form-control" id="inputAddress" placeholder=""
      name="product.installationcost"
      value={data.product.installationcost}
      onChange={handleInputChange}
      />
      </div>
    </div>
</div>
  <nav aria-label="Page navigation example ">
  <ul className="pagination mx-auto my-5">
    <li className={`page-item`}><a className={`page-link ${count == '1'? 'disabled':''}`} onClick={decrement} >Previous</a></li>
    <li className="page-item"><a className={`page-link ${count == '3'? 'disabled':''}`} onClick={increment}>Next</a></li>
  </ul>
</nav>
</form>
<button type="submit" onClick={submitForm} className={`btn btn-primary ${action == 'add' ? 'btn-primary' : 'btn-warning'} col-12 ${count === 3 ? '' : 'd-none'}`}>{action == 'add'?"Place Ordder":"Update"}</button>
<button type="submit" onClick={deleteForm} className={`btn btn-danger  col-12 my-2 ${action == 'add' ? 'd-none' : ' '}`}>Delete</button>
</div>
  </div>
    </>
    )
}

export default Multiform
