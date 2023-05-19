import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type == ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    const tempItem = state.cart.find((a) => a.id == id + color);

    if (tempItem) {
      const tempCart = state.cart.map((a) => {
        if (a.id == id + color) {
          let newAmount = a.amount + amount;
          if (newAmount > a.max) {
            newAmount = a.max;
          }
          return { ...a, amount: newAmount };
        } else {
          return a;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type == REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((a) => a.id != action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type == CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type == TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((a) => {
      if (a.id == id) {
        if (value == "inc") {
          //increase
          let newAmount = a.amount + 1;
          if (newAmount > a.max) {
            newAmount = a.max;
          }
          return { ...a, amount: newAmount };
        }
        if (value == "dec") {
          //decrease
          let newAmount = a.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...a, amount: newAmount };
        } else {
          return a;
        }
      }
    });

    return { ...state, cart: tempCart };
  }
  if (action.type == COUNT_CART_TOTALS) {
    const { items, amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.items += amount;
        total.amount += price * amount;

        return total;
      },
      {
        items: 0,
        amount: 0,
      }
    );
    return { ...state, total_items: items, total_amount: amount };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
