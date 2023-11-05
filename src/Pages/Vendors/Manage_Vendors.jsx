import React, { useState, useEffect } from 'react';

export const Manage_Vendors = () => {
  const [allData, setAllData] = useState([]);
  const [dynamicTitle, setDynamicTitle] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [head, setHead] = useState('');
  const [hiddenId, setHiddenId] = useState('');
  const [actionButton, setActionButton] = useState('');
  const [disableButton, setDisableButton] = useState(0);
  const [validationErrors, setValidationErrors] = useState({});
  useEffect(() => {
    // Fetch data and populate 'allData' state here using Axios or any other method
    // You should also fetch 'tbl_all_Data_all_Data_hr_all_Data_type' data here if it's dynamic
  }, []);

  const openModel = () => {
    
    // Implement the logic to open the modal
  };

  const fetchData = (id) => {
    // Implement the logic to fetch data based on id
  };

  const deleteData = (id) => {
    // Implement the logic to delete data based on id
  };

  const submitData = () => {
    // Implement the logic to submit data
  };
  return (
    <>
<div className="container">
    <div className="row page-titles mx-0">
      <div className="col p-md-0">
        <h4>Manage Vendor</h4>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="#">Product</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="#">Manage Vendor</a>
          </li>
        </ol>
        <button
          type="button"
          className="btn btn-primary px-5 radius-30 pull-right btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#dataModal"
          onClick={openModel}
        >
          Add Product
        </button>
        <br />
      </div>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="table-responsive">
          <table
            className="table datatable table-responsive"
            style={{ overflowX: 'scroll', blockSize: '100vh' }}
          >
            <thead>
              <tr>
                <th>Action</th>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>GST</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((row) => (
                <tr key={row.hr_manage_member_institute_id}>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fadeIn animated bx bx-list-ul"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <button
                            type="button"
                            name="edit"
                            className="btn btn-primary btn-xs edit"
                            data-bs-toggle="modal"
                            data-bs-target="#dataModal"
                            onClick={() => fetchData(row.hr_manage_member_institute_id)}
                          >
                            Edit
                          </button>
                        </li>
                        <li className="dropdown-item">
                          <button
                            type="button"
                            name="delete"
                            className="btn btn-danger btn-xs delete"
                            onClick={() => deleteData(row.hr_manage_member_institute_id)}
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.head}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      {/* ... (Modal markup) */}
    </div>
  </div>
   </div>
</>  )
}
