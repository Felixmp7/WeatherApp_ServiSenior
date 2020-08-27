import { HANDLE_ERROR } from "../constants/index";
import { handleActions } from "redux-actions";

export const handleErrorInFetchData = handleActions(
  {
    [HANDLE_ERROR]: (state, action) => action.payload.error,
  },
  {}
);
