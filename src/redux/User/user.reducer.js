import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  resetPasswordSuccess: false,
  userErr: null,
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_UP_USER_START:
    case userTypes.EMAIL_SIGN_IN_START:
      return{
        ...state,
        loading:true

      }
    case userTypes.SIGN_FAILD:
      return{
        ...state,
        userErr: action.payload,
        loading: false
      }  
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
        loading: false
      }
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload
      }
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
        loading: false
      }
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    default:
      return state;
  }
};

export default userReducer;