import productsTypes from './products.types';
import productTypes from './products.types';

const INITIAL_STATE = {
  products: [],
  product: {},
  loading:false
};

const productsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case productTypes.FETCH_PRODUCTS_START:
      return{
        ...state,
        loading:true
      }
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading:false
      }
    case productsTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state;
  }
};

export default productsReducer;