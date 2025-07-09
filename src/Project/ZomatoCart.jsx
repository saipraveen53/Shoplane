import { createStore } from "redux";
import { createContext } from "react";
import { useReducer } from "react";

export let zomatocontext = createContext();

export let intialcart = [];

export let ZomatoReducer = (state = intialcart, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((_, i) => i !== action.payload);
    case "EMPTY":
      return intialcart;
    default:
      return state;
  }
};

let ZomatoCart = ({ children }) => {
  let [cart, dispatch] = useReducer(ZomatoReducer, intialcart);
  return (
    <zomatocontext.Provider value={{ cart, dispatch }}>
      {children}
    </zomatocontext.Provider>
  );
};

export default ZomatoCart;

export let zomatoStore = createStore(ZomatoReducer);
