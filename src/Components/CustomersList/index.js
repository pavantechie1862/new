import Header from "../Header";
import { SlOptionsVertical } from "react-icons/sl";
import "../tableStylings.css";
import "./index.css";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

// import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DeleteCustomer from "../../Modals/DeleteCustomer";

const dummyData = [
  {
    id: "jsamfjsdf",
    nreportingNameame: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "adasdd",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "wqewqr",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "4132424",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "gngf",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "iyuk",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "568776hjk",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
  },
  {
    id: "dfghjyui",
    reportingName: "customer name",
    email: "customer email",
    contact: "098765432",
    GSTnumber: "KKJASDFSDF",
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

const CustomersList = () => {
  const [companiesList, setCompaniesList] = useState(dummyData);
  const [deleteModal, setDeleteModal] = useState(false);
  const companiesListReference = collection(db, "customerMaster");
  const history = useHistory();

  useEffect(() => {
    const getCompaniesList = async () => {
      try {
        const data = await getDocs(companiesListReference);
        const filteredData = data.docs.map((eachRecord) => ({
          ...eachRecord.data(),
          id: eachRecord.id,
        }));

        const formattedData = filteredData.map((each) => ({
          reportingName: each.billingName,
          billingName: each.billingName,
          reportingAddress: each.customerAddress,
          billingAddress: each.billingAddress,
          customerEmail: each.customerEmail,
          customerMobile: each.mobileNumber,
          PANnumber: each.pan,
          workOrder: each.WorkOrder,
          GSTnumber: each.customerGSTNo,
          id: each.id,
        }));
        setCompaniesList(formattedData);
      } catch (err) {
        console.log(err);
      }
    };

    getCompaniesList();
  }, [companiesListReference]);

  const onDeleteCustomerData = async (id) => {
    setDeleteModal(!deleteModal);

    //have to remove this after connected to store
    // setCompaniesList((prevState) => prevState.filter((each) => each.id !== id));
    // const customerRecord = doc(db, "companies_list", id);
    // await deleteDoc(customerRecord);
  };

  const renderSelectByStatus = () => {
    return (
      <select
        className="filter-dropdown"
        // value={status}
        // onChange={(event) => dispatch(onSelectStatus(event.target.value))}
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
        // value={approvalStatus}
        className="filter-dropdown"
        // onChange={(event) =>
        // dispatch(onSelectApproveStatus(event.target.value))
        // }
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
      // value={orderId}
      // onChange={(event) => dispatch(onChangeOrderId(event.target.value))}
    />
  );

  const renderSearchByCompanyName = () => (
    <input
      className="filter-dropdown"
      type="search"
      placeholder="Search - COMPANY NAME"
      // value={name}
      // onChange={(event) => dispatch(onChangeCompanyName(event.target.value))}
    />
  );

  const updateCustomerDetails = (id) => {
    history.push(`/edit-customer/${id}`);
  };

  return (
    <div className="customers-list-container">
      <Header />
      <div className="customers-list-inner-container">
        {deleteModal && <DeleteCustomer delete={onDeleteCustomerData} />}
        <div className="filter-elements-container">
          {renderSelectByStatus()}
          {renderSelectByApprovalStatus()}
          {renderSearchByOrderId()}
          {renderSearchByCompanyName()}
          <button
            type="button"
            className="button sq-btn"
            // onClick={() => dispatch(onResetFilters())}
          >
            Reset Filters
          </button>
        </div>

        <table className="table-container">
          <thead className="table-header-row">
            <tr>
              <th className="table-header-cell cell width-20">Name</th>
              <th className="table-header-cell cell width-20">Email</th>
              <th className="table-header-cell cell width-15">Contact</th>
              <th className="table-header-cell cell width-15">GST number</th>
              <th className="table-header-cell cell width-10">Actions</th>
            </tr>
          </thead>
          <tbody className="table-body-container">
            {companiesList.map((eachCustomer) => (
              <tr key={eachCustomer.id} className="table-body-row">
                <td className="table-column cell width-20 all-uppercases">
                  {eachCustomer.reportingName}
                </td>
                <td className="table-column cell width-20 all-lowercases">
                  {eachCustomer.customerEmail}
                </td>
                <td className="table-column cell width-15">
                  {eachCustomer.customerMobile}
                </td>

                <td className="table-column cell width-15 all-uppercases">
                  {eachCustomer.GSTnumber}
                </td>

                <td className="table-column cell width-10">
                  <span className="action-dropdown-container">
                    <div className="action-dropdown-icon">
                      <SlOptionsVertical />
                    </div>
                    <div className="action-options-menu">
                      <button
                        type="button"
                        onClick={() => updateCustomerDetails(eachCustomer.id)}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => onDeleteCustomerData(eachCustomer.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersList;
