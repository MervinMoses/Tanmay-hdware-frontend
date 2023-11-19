import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import { useForm, Form } from '../../Components/useForm';
import * as CustomerService from '../../Services/CustomerService'
import Controls from "../../Components/controls/Controls";


const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function InventoryPop(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('Product Group' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('Vendor' in fieldValues)
             temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('GST' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={10}>
                    <Controls.Input
                        name="ProductName"
                        label="Product Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Product Group"
                        name="ProductGroup"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Stock in WareHouse"
                        name="Stock"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                      <Controls.Input
                        label="Price"
                        name="Price"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>

                  
                </Grid>
        </Form>
    )
}
