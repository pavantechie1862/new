import { listOrdersActionType } from "../Actions/actionTypes";

const filterValues = {
  selectByStatus: "keka",
  searchByName: "keka",
  searchByOrderId: "keka",
  searchByApprovalStatus: "keka",
};

export const listOrdersReducer = (state = filterValues, action) => {
  switch (action.type) {
    case listOrdersActionType.ON_RESET_FILTERS:
      return {
        selectByStatus: "",
        searchByName: "",
        searchByOrderId: "",
        searchByApprovalStatus: "",
      };

    case listOrdersActionType.ON_SELECT_STATUS:
      return { ...state, selectByStatus: action.payload };
    case listOrdersActionType.ON_CHANGE_ORDER_ID: {
      console.log("triggered");
      return { ...state, searchByOrderId: action.payload };
    }

    case listOrdersActionType.ON_CHANGE_COMPANY_NAME:
      return { ...state, searchByName: action.payload };
    case listOrdersActionType.ON_SELECT_APPROVAL_STATUS:
      return { ...state, searchByApprovalStatus: action.payload };

    default:
      return { ...state, searchByName: "mani ratnam" };
  }
};
