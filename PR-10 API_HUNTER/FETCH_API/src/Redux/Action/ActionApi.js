export const fetchApiData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_API_REQUEST' });

    try {
      const res = await fetch('https://dummyjson.com/quotes');
      const data = await res.json();
      dispatch({ type: 'FETCH_API_SUCCESS', payload: data.quotes });
    } catch (error) {
      dispatch({ type: 'FETCH_API_FAILURE', payload: error.message });
    }
  };
};
