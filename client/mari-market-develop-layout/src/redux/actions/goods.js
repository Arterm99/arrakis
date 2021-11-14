import axios from 'axios';

export const fetchGoods = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`https://crotone.000webhostapp.com/json-product`)
    .then(({ data }) => {
        dispatch(setItems(data));
        dispatch(setLoaded(true));
      });
}

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});


export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
});

