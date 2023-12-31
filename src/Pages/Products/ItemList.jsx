import React, { useState, useEffect } from 'react'
import PageHeader from "../../Components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../Components/useTable";
import * as CustomerService from "../../Services/CustomerService"
import Controls from "../../Components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../Components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ProductG from './ProductG';
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
    { id: 'Product Name', label: 'Product Name' },
    { id: 'Product Group', label: 'Product Group' },
    { id: 'Price', label: 'Price' },
    { id: 'Brand', label: 'Brand' },
    { id: 'Mfg Date', label: 'Mfg Date' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


export const ItemList = (props) => {
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
              title="Product Group"
              subTitle="Details of all the Product"
              icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
          />
          <Paper className={classes.pageContent}>

              <Toolbar>
                  <Controls.Input
                      label="Search Product Group"
                      className={classes.searchInput}
                      InputProps={{
                          startAdornment: (<InputAdornment position="start">
                              <Search />
                          </InputAdornment>)
                      }}
                      onChange={handleSearch}
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
      
          </div>
          </div>
      </>
  )
}