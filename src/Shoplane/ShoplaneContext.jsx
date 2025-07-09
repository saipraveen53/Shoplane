import React, { useReducer, useState } from "react";
import { shoplaneCartReducer } from "./shoplaneReducer";
import { intialState } from "./shoplaneReducer";
import { createContext } from "react";

export let Context = createContext();

const ShoplaneContext = ({ children }) => {
  let [filtered, setFiltered] = useState("");
  let [state, dispatch] = useReducer(shoplaneCartReducer, intialState);
  let [apidata, setapiData] = useState([]);
  let [categorydata, setcatageoryData] = useState([]);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        filtered,
        setFiltered,
        apidata,
        setapiData,
        categorydata,
        setcatageoryData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ShoplaneContext;
