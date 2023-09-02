import { customersListActionTypes } from "../Actions/actionTypes";
import { apiStatusConstants } from "../Actions/actionTypes";

const filterValues = {
  selectByStatus: "",
  searchByName: "",
  searchByOrderId: "",
  searchByApprovalStatus: "",
  listStatus: {
    errMsg: "",
    customersList: [],
    apiStatus: apiStatusConstants.INITIAL,
  },
};

export const listOrdersReducer = (state = filterValues, action) => {
  switch (action.type) {
    case customersListActionTypes.ON_RESET_FILTERS:
      return {
        selectByStatus: "",
        searchByName: "",
        searchByOrderId: "",
        searchByApprovalStatus: "",
      };

    case customersListActionTypes.ON_SELECT_STATUS:
      return { ...state, selectByStatus: action.payload };
    case customersListActionTypes.ON_CHANGE_ORDER_ID: {
      return { ...state, searchByOrderId: action.payload };
    }

    case customersListActionTypes.ON_CHANGE_COMPANY_NAME:
      return { ...state, searchByName: action.payload };
    case customersListActionTypes.ON_SELECT_APPROVAL_STATUS:
      return { ...state, searchByApprovalStatus: action.payload };

    case customersListActionTypes.listStatus.apiStatus:
      return { ...state };

    default:
      return { ...state, searchByName: "mani ratnam" };
  }
};
