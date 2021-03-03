import ordersTypes from './orders.types';

const INITIAL_STATE = {
  orderHistory: [],
  orderDetails: {},
  loading:false
};

const ordersReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ordersTypes.GET_USER_ORDER_HISTORY_START:
    case ordersTypes.GET_ORDER_DETAILS_START:
      return{
        ...state,
        loading: true
      }
    case ordersTypes.SET_USER_ORDER_HISOTRY:
      return {
        ...state,
        orderHistory: action.payload,
        loading: false
      };
    case ordersTypes.SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default ordersReducer;
