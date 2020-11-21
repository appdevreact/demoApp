import * as restClient from "../../services/restClient";
import {
  FETCH_EMPLOYEES,
  UPDATE_ITEM_VALUES,
  EDIT_VALUE,
} from "../../reducers/reducer-constants";
// return fetchCommon()(dispatch, STANDING_ORDERS_DATA);
const url = "http://dummy.restapiexample.com/api/v1/employees";
// const url="http://localhost:8080/user/articles";

export function renderSteps() {
  return (dispatch) => {
    return restClient.get(url).then((json) => {
      dispatch(receiveSuccess(json));
    });
  };
}
export function editData(item) {
  return {
    type: EDIT_VALUE,
    item,
  };
}
export function updateItemValues(id, updatedid, updatedemployeename) {
  return {
    type: UPDATE_ITEM_VALUES,
    id,
    updatedid,
    updatedemployeename,
  };
}
function receiveSuccess(json) {
  return {
    type: FETCH_EMPLOYEES,
    json,
  };
}
