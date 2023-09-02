import Header from "../Header";
import { SlOptionsVertical } from "react-icons/sl";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
// import DeleteModal from "../../Modals";

import {
  onChangeOrderId,
  onChangeCompanyName,
  onSelectStatus,
  onSelectApproveStatus,
  onResetFilters,
} from "../../Redux/Actions/listOrderActions";

const ordersList = [
  {
    orderId: "ksjfsdf",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "safsadsadsfdsdfdsfdsd",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sfddsfsfd",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sdfhsdfsdfsdfdsf",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "safsa4adsfdsdfdsfdsd",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sfddsfsfd",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "324dwfs65765df",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "rewtr",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "safdsd",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sdfsdfdsfsdfsdsdg",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sfddgfd4444444444fg",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sdf",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sdfsdf",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
];

const statusOptions = [
  { statusId: "COMPLTED", statusText: "Completed" },
  { statusId: "PENDING", statusText: "Pending" },
  { statusId: "PROGRESS", statusText: "Progress" },
];

const approvalStatusOptions = [
  { statusId: "COMPLTED", statusText: "Approved" },
  { statusId: "PENDING", statusText: "Pending" },
  { statusId: "PROGRESS", statusText: "Not yet approved" },
];

const OrdersListItem = (props) => {
  const { projectDetails } = props;
  const {
    orderId,
    projectName,
    customerName,
    approvalStatus,
    status,
    dueDate,
  } = projectDetails;
  return (
    <li className="table-row">
      <p className="table-data-cell column">{orderId}</p>
      <hr className="separator" />
      <p className="table-data-cell column">{projectName}</p>
      <hr className="separator" />
      <p className="table-data-cell column">{customerName}</p>
      <hr className="separator" />
      <p className="table-data-cell column">{approvalStatus}</p>
      <hr className="separator" />
      <p className="table-data-cell column options-column">{status}</p>
      <hr className="separator" />
      <p className="table-data-cell column options-column">{dueDate}</p>
      <hr className="separator" />
      <div className="table-data-cell column options-column">
        <div className="action-dropdown-container">
          <div className="action-dropdown-icon">
            <SlOptionsVertical />
          </div>
          <div className="action-options-menu">
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

const ListOrders = () => {
  const status = useSelector(
    (state) => state.listOrders.listOrdersReducer.selectByStatus
  );
  const name = useSelector(
    (state) => state.listOrders.listOrdersReducer.searchByName
  );
  const orderId = useSelector(
    (state) => state.listOrders.listOrdersReducer.searchByOrderId
  );
  const approvalStatus = useSelector(
    (state) => state.listOrders.listOrdersReducer.searchByApprovalStatus
  );
  const dispatch = useDispatch();

  const renderSelectByStatus = () => {
    return (
      <select
        className="filter-dropdown"
        value={status}
        onChange={(event) => dispatch(onSelectStatus(event.target.value))}
      >
        <option value="" className="option-ele" hidden>
          Filter by STATUS
        </option>
        {statusOptions.map((eachStatus) => (
          <option
            key={eachStatus.statusId}
            value={eachStatus.statusId}
            className="option-ele"
          >
            {eachStatus.statusText}
          </option>
        ))}
      </select>
    );
  };

  const renderSelectByApprovalStatus = () => {
    return (
      <select
        value={approvalStatus}
        className="filter-dropdown"
        onChange={(event) =>
          dispatch(onSelectApproveStatus(event.target.value))
        }
      >
        <option value="" className="option-ele" hidden>
          Filter by APPROVAL STATUS
        </option>
        {approvalStatusOptions.map((eachStatus) => (
          <option
            key={eachStatus.statusId}
            value={eachStatus.statusId}
            className="option-ele"
          >
            {eachStatus.statusText}
          </option>
        ))}
      </select>
    );
  };

  const renderSearchByOrderId = () => (
    <input
      className="filter-dropdown"
      type="search"
      placeholder="Search - ORDER ID"
      value={orderId}
      onChange={(event) => dispatch(onChangeOrderId(event.target.value))}
    />
  );

  const renderSearchByCompanyName = () => (
    <input
      className="filter-dropdown"
      type="search"
      placeholder="Search - COMPANY NAME"
      value={name}
      onChange={(event) => dispatch(onChangeCompanyName(event.target.value))}
    />
  );

  return (
    <div className="list-orders-container">
      <Header />
      <div className="list-orders-inner-container">
        <div className="filter-elements-container">
          {renderSelectByStatus()}
          {renderSelectByApprovalStatus()}
          {renderSearchByOrderId()}
          {renderSearchByCompanyName()}
          <button
            type="button"
            className="button sq-btn"
            onClick={() => dispatch(onResetFilters())}
          >
            Reset Filters
          </button>
        </div>
        <div>
          <div className="table-header">
            <p className="table-header-cell column">Order Id</p>
            <hr className="separator" />
            <p className="table-header-cell column">project name</p>
            <hr className="separator" />
            <p className="table-header-cell column">customer name</p>
            <hr className="separator" />
            <p className="table-header-cell column">Approval status</p>
            <hr className="separator" />
            <p className="table-header-cell column options-column">status</p>
            <hr className="separator" />
            <p className="table-header-cell column options-column">due date</p>
            <hr className="separator" />
            <p className="table-header-cell column options-column">Action</p>
          </div>
          <ul className="table-container table-height-restricted">
            {ordersList.map((eachItem) => (
              <OrdersListItem
                projectDetails={eachItem}
                key={eachItem.orderId}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListOrders;
