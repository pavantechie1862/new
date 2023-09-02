import { useEffect, useState } from "react";
import Header from "../Header";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

import "./index.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const AddCustomer = () => {
  const [reporitngName, setReportingName] = useState("");
  const [reportingAddress, setReportingAdd] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [GSTnumber, setGSTnumber] = useState("");
  const [pan, setPan] = useState("");
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [workOrder, setWorkOrder] = useState("");

  const routeInfo = useParams();
  const editForm = routeInfo.id !== undefined ? true : false;

  useEffect(() => {
    const getCustomerDetails = async () => {
      if (editForm) {
        try {
          const customerRef = doc(db, "companies_list", routeInfo._id);
          const customerRecord = await getDoc(customerRef);
          if (customerRecord.exists()) {
            const customerData = customerRecord.data();
            setReportingName(customerData.reporting_name);
            setReportingAdd(customerData.reporting_address);
            setBillingName(customerData.billing_name);
            setCustomerEmail(customerData.customer_email);
            setCustomerContact(customerData.customer_contact);
            setGSTnumber(customerData.gst_number);
            setPan(customerData.pan_number);
            setBillingAddress(customerData.billingAddress);
            setWorkOrder(customerData.workOrder);
            console.log("is is an edit form");
          } else {
            console.log("Customer not found");
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log("it is an add form");
      }
    };
    getCustomerDetails();
  }, []);

  const handleOnchangeReportingName = (event) =>
    setReportingName(event.target.value);

  const handleOnchangeReportingAddress = (event) =>
    setReportingAdd(event.target.value);

  const handleOnchangCustomerEmail = (event) =>
    setCustomerEmail(event.target.value);

  const handleOnchangCustomerContact = (event) =>
    setCustomerContact(event.target.value);

  const handleOnchangGSTnumber = (event) => setGSTnumber(event.target.value);

  const handleOnchangPANnumber = (event) => setPan(event.target.value);

  const handleOnchangBillingName = (event) =>
    setBillingName(event.target.value);

  const handleOnchangeBillingAddress = (event) =>
    setBillingAddress(event.target.value);

  const handleOnchangWorkOrder = (event) => setWorkOrder(event.target.value);

  const onSubmitCustomer = async (event) => {
    event.preventDefault();
    const newCustomerData = {
      reporting_name: reporitngName,
      billing_name: billingName,
      reporting_address: reportingAddress,
      billing_address: billingAddress,
      customer_email: customerEmail,
      customer_contact: Number(customerContact),
      pan_number: pan,
      work_order: workOrder,
      gst_number: GSTnumber,
    };

    try {
      if (editForm) {
        const customerRecord = doc(db, "companies_list", routeInfo.id);
        await updateDoc(customerRecord, newCustomerData);
        alert("company is edited");
      } else {
        const companiesListReference = collection(db, "companies_list");
        await addDoc(companiesListReference, newCustomerData);
        alert("company is added");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderReportingName = () => {
    return (
      <>
        <label className="label-text" htmlFor="reportingName">
          reporting name
        </label>
        <input
          id="reportingName"
          type="text"
          placeholder="Ex KDM engineering and cunsultancy"
          value={reporitngName}
          onChange={handleOnchangeReportingName}
          className="input-field-100"
        />
      </>
    );
  };

  const renderReportingAddress = () => {
    return (
      <>
        <label className="label-text" htmlFor="reportingAddress">
          reporting address
        </label>
        <textarea
          cols={100}
          rows={5}
          id="reportingAddress"
          placeholder="Add address"
          value={reportingAddress}
          onChange={handleOnchangeReportingAddress}
          className="input-field-100 textarea-field"
        ></textarea>
      </>
    );
  };

  const renderCustomerEmail = () => {
    return (
      <>
        <label className="label-text" htmlFor="customerEmail">
          customer email
        </label>
        <input
          id="customerEmail"
          type="text"
          placeholder="example@email.com"
          value={customerEmail}
          onChange={handleOnchangCustomerEmail}
          className="input-field-100"
        />
      </>
    );
  };

  const renderCustomerContact = () => {
    return (
      <>
        <label className="label-text" htmlFor="customerMobile">
          customer mobile
        </label>
        <input
          id="customerMobile"
          type="text"
          placeholder="ex - 9876543210"
          value={customerContact}
          onChange={handleOnchangCustomerContact}
          className="input-field-100"
        />
      </>
    );
  };

  const renderGSTnumber = () => {
    return (
      <>
        <label className="label-text" htmlFor="GSTnumber">
          gst number
        </label>
        <input
          id="GSTnumber"
          type="text"
          placeholder="GST number"
          value={GSTnumber}
          onChange={handleOnchangGSTnumber}
          className="input-field-100"
        />
      </>
    );
  };

  const renderPANnumber = () => {
    return (
      <>
        <label className="label-text" htmlFor="PANnumber">
          pan Number
        </label>
        <input
          id="PANnumber"
          type="text"
          placeholder="PAN number"
          value={pan}
          onChange={handleOnchangPANnumber}
          className="input-field-100"
        />
      </>
    );
  };

  const renderBillingName = () => {
    return (
      <>
        <label className="label-text" htmlFor="billingName">
          billing name
        </label>
        <input
          id="billingName"
          type="text"
          placeholder="Enter billing name"
          value={billingName}
          onChange={handleOnchangBillingName}
          className="input-field-100"
        />
      </>
    );
  };

  const renderBillingAdd = () => {
    return (
      <>
        <label className="label-text" htmlFor="billingAddress">
          billing address
        </label>
        <textarea
          cols={100}
          rows={5}
          id="billingAddress"
          placeholder="Enter Billing address"
          value={billingAddress}
          onChange={handleOnchangeBillingAddress}
          className="input-field-100 textarea-field"
        ></textarea>
      </>
    );
  };

  const renderWorkOrder = () => {
    return (
      <>
        <label className="label-text" htmlFor="workOrder">
          work order
        </label>
        <input
          id="workOrder"
          type="text"
          placeholder="Enter work order"
          value={workOrder}
          onChange={handleOnchangWorkOrder}
          className="input-field-100"
        />
      </>
    );
  };

  const renderButtons = () => (
    <div>
      <button type="submit" className="button">
        {editForm ? "Update info" : "Add"}
      </button>

      <button type="reset" className="button outline">
        Reset
      </button>
    </div>
  );

  return (
    <div className="add-customer-container">
      <Header />
      <div className="add-customer-body">
        <p>
          Edit Required fileds and hit update button to update the customer's
          details
        </p>

        <form className="add-customer-form" onSubmit={onSubmitCustomer}>
          <div className="large-fields add-customer-fields">
            {renderReportingName()}
            {renderBillingName()}
            {renderReportingAddress()}
            {renderBillingAdd()}
          </div>
          <div className="small-fields add-customer-fields">
            {renderCustomerEmail()}
            {renderCustomerContact()}
            {renderGSTnumber()}
            {renderPANnumber()}
            {renderWorkOrder()}
            {renderButtons()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;

// const updateDb = async () => {
//   for (let each of customersList) {
//     const companiesListReference = collection(db, "companies_list");
//     await addDoc(companiesListReference, each);
//     const companyname = each.reporting_name;
//     alert(`company : ${companyname} is added successfully`);
//   }
// };
// updateDb();
