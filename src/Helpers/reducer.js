export const initialState = {
  basket: [],
  user: null,
};

// Selectors
export const getBasketTotal = (basket) => {
  let amount = 0;
  basket?.map((item) => (amount += item?.price * item?.quantity));
  return amount;
};

export const getBasketCount = (basket) => {
  let cnt = 0;
  for (const item of basket) cnt += item.quantity;
  return cnt;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let newBasket = [...state.basket];
      let flag = 0;
      newBasket = newBasket.map((item) => {
        if (item.id === action.product.id) {
          flag = 1;
          item.quantity += 1;
        }
        return item;
      });
      if (flag)
        return {
          ...state,
          basket: [...newBasket],
        };
      return {
        ...state,
        basket: [
          ...state.basket,
          {
            id: action.product.id,
            image: action.product.image,
            title: action.product.title,
            subtitle: action.product.subtitle,
            stars: action.product.stars,
            quantity: 1,
            price: action.product.price,
          },
        ],
      };
    case "REMOVE_FROM_BASKET":
      let newCart = [...state.basket];
      newCart = newCart.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: newCart,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
