import {NEWS_SHARE_REQUEST,NEWS_SHARE_SUCCESS,NEWS_SHARE_FAIL} from "../constants/shareNewsConstants"


export const shareNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_SHARE_REQUEST:
      return { loading: true };

    case NEWS_SHARE_SUCCESS:
      return { loading: false, success: true };

    case NEWS_SHARE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};