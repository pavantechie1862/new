import { listOrdersActionType } from "./actionTypes";

export const onResetFilters = () => {
  return {
    type: listOrdersActionType.ON_RESET_FILTERS,
  };
};

export const onChangeOrderId = (orderId) => {
  return {
    type: listOrdersActionType.ON_CHANGE_ORDER_ID,
    payload: orderId,
  };
};

export const onChangeCompanyName = (companyName) => {
  return {
    type: listOrdersActionType.ON_CHANGE_COMPANY_NAME,
    payload: companyName,
  };
};

export const onSelectStatus = (status) => {
  return {
    type: listOrdersActionType.ON_SELECT_STATUS,
    payload: status,
  };
};

export const onSelectApproveStatus = (approvalStatus) => {
  return {
    type: listOrdersActionType.ON_SELECT_APPROVAL_STATUS,
    payload: approvalStatus,
  };
};
