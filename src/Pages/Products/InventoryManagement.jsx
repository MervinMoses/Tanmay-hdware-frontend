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
import InventoryPop from './InventoryPop';
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
    { id: 'Product Name', label: 'Product Group' },
    { id: 'Product Group', label: 'Product Group' },
    { id: 'Stock in WareHouse', label: 'stock in WareHouse' },
    { id: 'Price', label: 'Price' },
    { id: 'MfgDate', label: 'MfgDate' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


export const InventoryManagement = (props) => {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(CustomerService.getAllEmployees())
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

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            CustomerService.insertEmployee(employee)
        else
            CustomerService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(CustomerService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

  return (
      <>  
          <div className="container">
    <div className="row page-titles mx-0">
        <h4>Product Group</h4>
      <ol className="breadcrumb">
      <li className="breadcrumb-item">
      <NavLink to="/Home">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">
      <NavLink to="/products">Product</NavLink>
      </li>
      <li className="breadcrumb-item active">
      <NavLink to="/productgroup">Product Group</NavLink>
      </li>
    </ol>
          <PageHeader
              title="Manage Product"
              subTitle="Details of all the Product"
              icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
          />
          <Paper className={classes.pageContent}>

              <Toolbar>
                  <Controls.Input
                      label="Search Product "
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
              title="Product Form"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
          >
              <InventoryPop
                  recordForEdit={recordForEdit}
                  addOrEdit={addOrEdit} />
          </Popup>
          </div>
          </div>
      </>
  )
}