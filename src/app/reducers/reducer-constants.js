/**********************************
 *      Action and Reducer keys
 * ********************************/
export const getActionTypes = (actionKey) => {
  return {
    FETCHING: `${actionKey}_fetching`,
    FULFILLED: `${actionKey}_fulfilled`,
    REJECTED: `${actionKey}_rejected`,
  };
};

// API related actions
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const UPDATE_ITEM_VALUES = "UPDATE_ITEM_VALUES";
export const EDIT_VALUE = "EDIT_VALUE";
