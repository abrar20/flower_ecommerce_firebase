import productsTypes from './products.types';


const INITIAL_STATE = {
  products: [],
  someProducts: [],
  footerProduct: [],
  product: {},
  loading:false,

};

const productsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case productsTypes.FETCH_PRODUCTS_START:
    case productsTypes.FETCH_SOME_PRODUCTS_START:
    case productsTypes.FETCH_FOOTER_PRODUCT_START:
      return{
        ...state,
        loading:true
      }
    case productsTypes.SET_SOME_PRODUCTS:
      return {
        ...state,
        someProducts: action.payload,
        loading:false
      }
    case productsTypes.SET_FOOTER_PRODUCT:
      return{
        ...state,
        loading:false,
        footerProduct: action.payload
      }
    case productsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading:false
      }
    case productsTypes.FETCH_PRODUCT_START:
      return{
        ...state,
        loading: true
      }
    case productsTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export default productsReducer;