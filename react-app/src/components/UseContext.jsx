import React, { createContext } from "react";
import { Component2 } from "./ContextComponents/Component2";


export var ThemeProvider = React.createContext();

export const UseContext = () => {
  return (
    <>
      <ThemeProvider.Provider value ={{sgpa : "9.00 sgpa"}}>
        <h1>This is the Parent Component</h1>
        <Component2 />
      </ThemeProvider.Provider>
    </>
  );
};
