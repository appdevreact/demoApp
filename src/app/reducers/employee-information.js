import {
  FETCH_EMPLOYEES,
  UPDATE_ITEM_VALUES,
  EDIT_VALUE,
} from "./reducer-constants";
const initialState = {
  json: {},
  updatejson: {},
};

export default function employeeInformation(
  state = { fetching: false, error: [], data: { ...initialState } },
  action = { type: "", payload: "" }
) {
  console.log(">>>>>>>>>>state>>>>>>>", action);
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return Object.assign({}, state, {
        json: action.json,
      });
    case UPDATE_ITEM_VALUES:
      return Object.assign({}, state, {
        id: action.id,
        updatedid: action.updatedid,
        updatedEmployeeName: action.updatedemployeename,
      });
    case EDIT_VALUE:
      return Object.assign({}, state, {
        ...(state.json[state.id - 1].id = state.updatedid),
        ...(state.json[state.id - 1].employee_name = state.updatedEmployeeName),
      });
    default:
      return state;
  }
}
