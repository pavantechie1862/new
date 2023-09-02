import "./index.css";
import Header from "../Header";

const completedListDummy = [
  {
    orderId: "ksjfsdf",
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
    orderId: "rewtr",
    projectName: "Ananda Site, Annojiguda, Hyderabad.",
    customerName: "ARK INFRA DEVELOPERS PRIVATE LIMITED",
    approvalStatus: "Send to Master Data",
    status: "Completed",
    dueDate: "10-11-1000",
  },
  {
    orderId: "sfddgfdfg",
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

const CompletedListItem = (props) => {
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
      <p className="table-data-cell column">{status}</p>
      <hr className="separator" />
      <p className="table-data-cell column">{dueDate}</p>
    </li>
  );
};

const CompletedOrders = () => {
  return (
    <div className="completed-orders-container">
      <Header />
      <div className="completed-orders-inner-container">
        <ul className="table-container">
          <li className="table-header">
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
          </li>
          {completedListDummy.map((eachItem) => (
            <CompletedListItem
              projectDetails={eachItem}
              key={eachItem.orderId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompletedOrders;
