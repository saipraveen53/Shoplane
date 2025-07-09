export let intialState = {
  cartItems: [],
};

export let shoplaneCartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "RESET":
      return intialState;
    default:
      return state;
  }
};
