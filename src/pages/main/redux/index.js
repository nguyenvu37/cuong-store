import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

export const { Types, Creators } = createActions({
  getListDataDept: ["data"],
});

export const INITIAL_STATE = Immutable({
  dataDept: [],
});

const getListDataDept = (state, action) => {
  return state.merge({
    type: action.type,
    dataDept: action?.data,
  });
};

const HANDLERS = {
  [Types.GET_LIST_DATA_DEPT]: getListDataDept,
};

// Create reducers by pass state and handlers
export const deptReducer = createReducer(INITIAL_STATE, HANDLERS);
