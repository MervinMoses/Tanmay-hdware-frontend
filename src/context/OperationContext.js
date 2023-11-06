import { createContext, useContext,
     useEffect, 
     useState
    } from "react";
import axios from 'axios';
/* eslint react/prop-types: 0 */
import React from 'react';
// import { auth } from "../firebase";
export function OperationContextProvider({children}){

  if (!user) {
    console.log('You must be logged in')

  }
  if (user) {
    console.log('logged in')
  }
useEffect(()=>{
 
},[])

  const addTableData = async (data) => {
   console.log("add code needs to put ")

  
  }
  const updateTableData = async (data) => {
    console.log("update code needs to put ")

}
    const fetchTableData = async (product) => {
            console.log("fetch need to create")
    }
      const deleteTableData = async (product) => {
           console.log("delete need to create")
    }
   




    // for enquiry 

    const addEnquiryTableData = async (data) => {
      console.log("addenquiry need to create")
    }
    const updateEnquiryTableData = async (data) => {
      console.log("upadte need to create")
    }
    const deleteEnquiryTableData = async (data) => {
      console.log("delete need to create")
    }
    const addActivity = async (data) => {
      console.log("addactivity need to create")
    }
    
    const getActivity = async () => {
      console.log("get need to create")
}



    return <operationContext.Provider value={{fetchTableData,deleteTableData,addTableData,updateTableData,error,setError,
      addEnquiryTableData,updateEnquiryTableData,deleteEnquiryTableData,getActivity
}}>
        {children}
     </operationContext.Provider>
}

export function useoperationContext(){
    return useContext(operationContext) 
}