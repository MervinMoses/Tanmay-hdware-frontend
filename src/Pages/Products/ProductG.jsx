import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import * as CustomerService from '../../Services/CustomerService'
import Controls from "../../components/controls/Controls";


const initialFValues = {
    id: 0,
    ProductGroup: '',
    Vendor: '',
    GST: '',
}

export default function CustomerPop(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('Product Group' in fieldValues)
            temp.ProductGroup = fieldValues.ProductGroup ? "" : "This field is required."
        if ('Vendor' in fieldValues)
             temp.Vendor = fieldValues.Vendor ? "" : "This field is required."
        if ('GST' in fieldValues)
            temp.GST = fieldValues.GST.length < 5 ? "" : "Minimum 15 numbers required."
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
        console.log("helio")
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        console.log("helio")
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
                        name="ProductGroup"
                        label="Product Group"
                        value={values.ProductGroup}
                        onChange={handleInputChange}
                        error={errors.ProductGroup}
                    />
                    <Controls.Input
                        label="Vendor"
                        name="Vendor"
                        value={values.Vendor}
                        onChange={handleInputChange}
                        error={errors.Vendor}
                    />
                    <Controls.Input
                        label="GST"
                        name="GST"
                        value={values.GST}
                        onChange={handleInputChange}
                        error={errors.GST}
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
