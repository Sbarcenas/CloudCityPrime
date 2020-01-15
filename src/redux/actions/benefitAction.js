import {
  ADD_BENEFITS,
  BENEFITS_LOADING,
  EXPORT_BENEFITS_HISTORY,
  EXPORT_FAILED,
  GET_BENEFITS,
  MESSAGE,
  USER_LOADING
} from "./types";
import {
  benefitHistory,
  claimBenefitService,
  readUserService,
  usersBenefitsService
} from "../../services/feathers";
import { clearErrors, returnErrors } from "./errorActions";
import { CLEAR_MESSAGE } from "./messageActions";

export const GET_BENEFIT = () => async dispatch => {
  usersBenefitsService
    .find({
      query: {
        $limit: 50,
        status: "Reclaimed",
        $sort: { date_redeem: -1 },
        $client: { join_users: "true" }
      }
    })
    .then(data => {
      dispatch({
        type: GET_BENEFITS,
        payload: data.data
      });
    })
    .catch(err => dispatch(returnErrors(err.message, err.status)));
};

export const SET_ITEMS_LOADING = () => {
  return {
    type: BENEFITS_LOADING
  };
};

export const ADD_BENEFIT = rawToken => async dispatch => {
  dispatch(SET_ITEMS_LOADING());
  dispatch(clearErrors());
  dispatch(CLEAR_MESSAGE());
  let token;
  if (rawToken) {
    token = rawToken.toUpperCase();
  }
  claimBenefitService
    .create({ token })
    .then(() => {
      dispatch({
        type: MESSAGE,
        payload: "Beneficio escaneado con exito"
      });
      dispatch(GET_BENEFIT());
    })
    .catch(e => {
      dispatch(returnErrors(e.message, e.status, null));
    });
};

export const EXPORT_BENEFITS_HIST = () => dispatch => {
  dispatch({
    type: BENEFITS_LOADING
  });

  return benefitHistory
    .create({})
    .then(res => {
      dispatch({
        type: EXPORT_BENEFITS_HISTORY
      });
      return res;
    })
    .catch(e => {
      dispatch({
        type: EXPORT_FAILED
      });
    });
};
