import {
  FETCH_EMPLOYEES,
  UPDATE_ITEM_VALUES,
  EDIT_VALUE,
  DELETE_ITEM,
} from "./reducer-constants";
const initialState = {
  json: {},
  updatejson: {},
};

export default function employeeInformation(
  state = { fetching: false, error: [], data: { ...initialState } },
  action = { type: "", payload: "" }
) {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return Object.assign({}, state, {
        json: action.json,
      });
    case UPDATE_ITEM_VALUES:
      return Object.assign({}, state, {
        id: action.id,
        newItem: action.newItem,
      });
    case EDIT_VALUE:
      return Object.assign({}, state, {
        ...(state.json[state.id - 1] = state.newItem),
      });
    case DELETE_ITEM:
      return Object.assign({}, state, {
        ...state.json.splice(action.id - 1, 1),
      });
    default:
      return state;
  }
}
