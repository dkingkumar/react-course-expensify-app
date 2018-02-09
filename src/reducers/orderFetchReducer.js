

  // Order Fetch Reducer

const fetchOrderReducerDefaultState = [];

export default (state = fetchOrderReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_ORDER_PENDING': {
        return {
          ...state,
          loading: true,
          contact: {name:{}}
        }
      }
    
      case 'FETCH_ORDER_FULFILLED': {
        return {
          ...state,
          contact: action.payload.data,
          errors: {},
          loading: false
        }
      }
    default:
      return state;
  }
};
