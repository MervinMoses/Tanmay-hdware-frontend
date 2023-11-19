import React, { useState, useEffect } from 'react'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as CustomerService from "../../Services/CustomerService"
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import CustomerPop from './CustomerPop';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'fullName', label: 'Customer Name' },
    { id: 'city', label: ' City ' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'Email', label: 'Email' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


export const Manage_Customers = (props) => {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(CustomerService.getAllProductGroups())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (product, resetForm) => {
        if (product.id == 0)
            CustomerService.insertproduct(product)
        else
            CustomerService.updateProductGroups(product)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(CustomerService.getAllProductGroups())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

  return (
      <>  
          <div className="container">
    <div className="row page-titles mx-0">
        <h4>Manage Customer</h4>
      <ol className="breadcrumb">
      <li className="breadcrumb-item">
      <NavLink to="/Home">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">
      <NavLink to="/products">Customers</NavLink>
      </li>
      <li className="breadcrumb-item active">
      <NavLink to="/productgroup">Manage Customers</NavLink>
      </li>
    </ol>
          <PageHeader
              title="Manage Customer"
              subTitle="Details of all the customers"
              icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
          />
          <Paper className={classes.pageContent}>

              <Toolbar>
                  <Controls.Input
                      label="Search Customer"
                      className={classes.searchInput}
                      InputProps={{
                          startAdornment: (<InputAdornment position="start">
                              <Search />
                          </InputAdornment>)
                      }}
                      onChange={handleSearch}
                  />
                  <Controls.Button
                      text="Add New"
                      variant="outlined"
                      startIcon={<AddIcon />}
                      className={classes.newButton}
                      onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                  />
              </Toolbar>
              <TblContainer>
                  <TblHead />
                  <TableBody>
                      {
                          recordsAfterPagingAndSorting().map(item =>
                              (<TableRow key={item.id}>
                                  <TableCell>{item.fullName}</TableCell>
                                  <TableCell>{item.email}</TableCell>
                                  <TableCell>{item.mobile}</TableCell>
                                  <TableCell>{item.department}</TableCell>
                                  <TableCell>
                                      <Controls.ActionButton
                                          color="primary"
                                          onClick={() => { openInPopup(item) }}>
                                          <EditOutlinedIcon fontSize="small" />
                                      </Controls.ActionButton>
                                      <Controls.ActionButton
                                          color="secondary">
                                          <CloseIcon fontSize="small" />
                                      </Controls.ActionButton>
                                  </TableCell>
                              </TableRow>)
                          )
                      }
                  </TableBody>
              </TblContainer>
              <TblPagination />
          </Paper>
          <Popup
              title="Customer Form"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
          >
              <CustomerPop
                  recordForEdit={recordForEdit}
                  addOrEdit={addOrEdit} />
          </Popup>
          </div>
          </div>
      </>
  )
}