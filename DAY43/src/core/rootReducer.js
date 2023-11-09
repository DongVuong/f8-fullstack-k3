export const initialState = sessionStorage.getItem("carts")
  ? JSON.parse(sessionStorage.getItem("carts"))
  : [];
export const rootReducer = (state, action) => {
  const { payload } = action;
  const { id, name, quantity, price } = payload;
  switch (action.type) {
    case "addProductItem": {
      let newState = state;
      if (
        newState.some((item) => {
          return item.id === id;
        })
      ) {
        newState = newState.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: ++item.quantity,
                remain: --item.remain,
                price: item.price + price,
              }
            : item
        );
      } else {
        newState = newState.concat({
          id,
          name,
          quantity: 1,
          remain: quantity - 1,
          price,
        });
      }
      sessionStorage.setItem("carts", JSON.stringify(newState));
      return newState;
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
