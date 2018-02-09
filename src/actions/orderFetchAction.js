
const url = '/fetchOrders';

export function fetchOrders(){
    return dispatch => {
      dispatch({
        type: 'FETCH_ORDERS',
        payload: client.get(url)
      })
    }
  }