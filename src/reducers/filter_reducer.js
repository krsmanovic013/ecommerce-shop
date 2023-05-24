import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  //LOAD
  if (action.type === LOAD_PRODUCTS) {
    const array = action.payload.map((a) => a.price);
    const maxPrice = Math.max(...array);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  //GRID AND LIST
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  //SORT
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: tempProducts };
  }

  //FILTER

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, color, company, shipping, price, max_price } =
      state.filters;

    let tempProducs = [...all_products];
    if (text) {
      tempProducs = tempProducs.filter((a) =>
        a.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducs = tempProducs.filter((a) => a.category === category);
    }
    if (company !== "all") {
      tempProducs = tempProducs.filter((a) => a.company == company);
    }

    if (color !== "all") {
      console.log(tempProducs);
      tempProducs = tempProducs.filter((a) =>
        a.colors.some((x) => x === color)
      );
    }
    if (shipping) {
      tempProducs = tempProducs.filter((a) => a.shipping);
    }
    if (price !== max_price) {
      tempProducs = tempProducs.filter((a) => a.price <= price);
    }

    return { ...state, filtered_products: tempProducs };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  return state;
};

export default filter_reducer;
