import { ADD_BENEFITS, BENEFITS_LOADING, GET_BENEFITS } from "./types";
import {claimBenefitService, readUserService, usersBenefitsService} from "../../services/feathers";
import { returnErrors } from "./errorActions";

export const GET_BENEFIT = () => async dispatch => {
  dispatch(SET_ITEMS_LOADING());
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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const SET_ITEMS_LOADING = () => {
  return {
    type: BENEFITS_LOADING
  };
};

export const ADD_BENEFIT = rawToken => async dispatch => {
  const token = rawToken.toUpperCase();
  await claimBenefitService.create({ token });
  dispatch(GET_BENEFIT());
};
