import {ADD_BENEFITS, BENEFITS_LOADING, GET_BENEFITS} from "./types";

export const GET_BENEFIT = () => dispatch => {
  /*
    dispatch(SET_ITEMS_LOADING());
    axios.get('/api/benefits').then(res =>
    dispatch({
    type:GET_BENEFITS,
    payload: res.data})
    )
    */
  return {
    type: GET_BENEFITS
  };
};

export const SET_ITEMS_LOADING = () => {

  return {
    type: BENEFITS_LOADING
  };
};

export const ADD_BENEFIT = item => dispatch =>  {

    /* axios.post('/api/benefits', item).then(res => // Inserto item en BD y cuando regrese el registro que inserto
 * dispatch({ // Se realiza el dispatch o de
 *  *   type: ADD_BENEFITS,<-
 *      payload: res.data <-
 * }) */
    return {
        type: ADD_BENEFITS,
        payload: item
    }
}
