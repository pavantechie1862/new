import { customersListActionTypes } from "./actionTypes";

export const onResetFilters = () => {
  console.log(customersListActionTypes);
  return {
    type: customersListActionTypes.ON_RESET_FILTERS,
  };
};

export const onChangeOrderId = (orderId) => {
  return {
    type: customersListActionTypes.ON_CHANGE_ORDER_ID,
    payload: orderId,
  };
};

export const onChangeCompanyName = (companyName) => {
  return {
    type: customersListActionTypes.ON_CHANGE_COMPANY_NAME,
    payload: companyName,
  };
};

export const onSelectStatus = (status) => {
  return {
    type: customersListActionTypes.ON_SELECT_STATUS,
    payload: status,
  };
};

export const onSelectApproveStatus = (approvalStatus) => {
  return {
    type: customersListActionTypes.ON_SELECT_APPROVAL_STATUS,
    payload: approvalStatus,
  };
};
