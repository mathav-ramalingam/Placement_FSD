import React from 'react'
import { useContext } from 'react';
import { ThemeProvider } from "../UseContext"



export const StudentResults = () => {
    var result = useContext(ThemeProvider);
  return (
    <>  
    <h1>Student Result {result.sgpa}</h1></>
  )
}
