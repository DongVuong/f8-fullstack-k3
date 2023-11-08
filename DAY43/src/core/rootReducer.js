export const initialState = sessionStorage.getItem("carts")
  ? JSON.parse(sessionStorage.getItem("carts"))
  : [];
export const rootReducer = (state, action) => {
  const { payload } = action;
  const { id, name, quantity, price } = payload;
  switch (action.type) {
    case "addProductItem": {
      if (
        state.some((item) => {
          return item.id === id;
        })
      ) {
        state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: ++item.quantity,
                remain: quantity - item.quantity,
                price: item.quantity + price,
              }
            : item
        );
      } else {
        state[state.length] = {
          id,
          name,
          quantity: 1,
          remain: quantity - 1,
          price,
        };
      }
      sessionStorage.setItem("carts", JSON.stringify(state));
      return state;
    }
    case "pay": {
      sessionStorage.setItem("carts", []);
      return [];
    }
    default: {
      return state;
    }
  }
};
