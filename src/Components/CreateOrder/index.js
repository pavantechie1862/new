import { useState } from "react";
import Header from "../Header";
import "./index.css";
import { testingMaterials } from "../../Utils/constants";
import { PHYSICAL, CHEMICAL } from "../../Utils/constants";

const assignToEmployeArray = [
  {
    id: "Employee_1",
    name: "Employee 1",
  },

  {
    id: "Employee_2",
    name: "Employee 2",
  },

  {
    id: "Employee_3",
    name: "Employee 3",
  },

  {
    id: "Employee_4",
    name: "Employee 4",
  },

  {
    id: "Employee_5",
    name: "Employee 5",
  },
];

const jobLocationArray = [
  {
    id: "LOCATION_1",
    location: "location 1",
  },
  {
    id: "LOCATION_2",
    location: "location 2",
  },
  {
    id: "LOCATION_3",
    location: "location 3",
  },
  {
    id: "LOCATION_4",
    location: "location 4",
  },
  {
    id: "LOCATION_5",
    location: "location 5",
  },
];

const statusArray = [
  {
    id: "STATUS_1",
    text: "status 1",
  },
  {
    id: "STATUS_2",
    text: "status 2",
  },
  {
    id: "STATUS_3",
    text: "status 3",
  },
  {
    id: "STATUS_4",
    text: "status 4",
  },
  {
    id: "STATUS_5",
    text: "status 5",
  },
];

let materialsData = testingMaterials;

const CreateOrder = () => {
  const [orderBy, setOrderBy] = useState("KDM/");
  const [projectName, setProjectName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerReference, setCustomerReference] = useState("");
  const [parentReference, setParentReference] = useState("");
  const [subject, setSubject] = useState("");
  const [discount, setDiscount] = useState("");
  const [transportFee, setTransportFee] = useState("");
  const [dueDate, setDueDate] = useState();
  const [customerConcatInfo, setCustomerContactInfo] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [assignToEmp, setAssignToEmp] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [testData, setTestData] = useState([
    {
      allMaterials: materialsData.filter((each) => each.materialName),
      materialName: "",
      physicalDiscipline: [],
      chemicalDiscipline: [],
      choosenChemTest: [],
      choosenPhyTest: [],
    },
  ]);

  const handleOnchangeChooseMaterialToTest = (id, ind) => {
    const filteredMaterial = materialsData.filter(
      (each) => each.materialName === id
    );

    materialsData = materialsData.filter((each) => each.materialName !== id);

    const physicalDiscipline = filteredMaterial[0].availableTests.filter(
      (each) => each.discipline === PHYSICAL
    );

    const chemicalDiscipline = filteredMaterial[0].availableTests.filter(
      (each) => each.discipline === CHEMICAL
    );

    console.log("before updated");
    testData[ind].materialName = id;
    console.log(testData);
    console.log("after updated");

    setTestData((prevState) =>
      prevState.map((each) => {
        if (each.materialName === id) {
          return {
            ...each,
            physicalDiscipline,
            chemicalDiscipline,
            choosenChemTest: [],
            choosenPhyTest: [],
          };
        }
        return each;
      })
    );
  };

  const onChangeTest = (obj, index) => {
    const test = JSON.parse(obj);
    const parent = test.parentMat;

    setTestData((prevState) =>
      prevState.map((eachMaterial) => {
        if (eachMaterial.materialName === parent) {
          if (test.discipline === PHYSICAL) {
            return {
              ...eachMaterial,
              choosenPhyTest: [...eachMaterial.choosenPhyTest, test],
              physicalDiscipline: eachMaterial.physicalDiscipline.filter(
                (each) => each.testName !== test.testName
              ),
            };
          }
        } else {
          return eachMaterial;
        }
      })
    );

    // setTestData((prevState) =>
    //   prevState.map((eachMaterial) => {
    //     if (eachMaterial.materialName === parent) {
    //       if (test.discipline === PHYSICAL) {
    //         return {
    //           ...eachMaterial,
    //           choosenPhyTest: [...eachMaterial.choosenPhyTest, test],
    //           physicalDiscipline: eachMaterial.physicalDiscipline.filter(
    //             (eachItem) => eachItem.testName !== test.testName
    //           ),
    //         };
    //       } else {
    //         return {
    //           ...eachMaterial,
    //           chemicalDiscipline: eachMaterial.chemicalDiscipline.filter(
    //             (eachItem) => eachItem.testName !== test.testName
    //           ),
    //           choosenChemTest: [...eachMaterial.choosenChemTest, test],
    //         };
    //       }
    //     }
    //   })
    // );
  };

  const renderChooseMaterialToTest = (each, index) => (
    <div key={index}>
      <>
        <label className="label-text" htmlFor="addInfo">
          Choose material - {index + 1}
        </label>
        <select
          onChange={(e) =>
            handleOnchangeChooseMaterialToTest(e.target.value, index)
          }
          className="input-field-100"
        >
          <option className="drop-down-option" value="" selected hidden>
            Choose a material
          </option>
          {each.allMaterials.map((each) => (
            <option key={each.id} className="drop-down-option" value={each.id}>
              {each.materialName}
            </option>
          ))}
        </select>
      </>

      <div className="chemical-physical-tests-container">
        <div>
          <label className="label-text" htmlFor="orderId">
            Physical tests
          </label>

          <select
            className="input-field-100"
            onChange={(e) => onChangeTest(e.target.value, index)}
          >
            <option value="" selected hidden>
              Select any Test
            </option>

            {each.physicalDiscipline.map((eachtest) => (
              <option
                key={each.testName}
                value={JSON.stringify(eachtest)}
                className=""
              >
                {eachtest.testName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label-text" htmlFor="orderId">
            chemical tests
          </label>

          <select
            className="input-field-100"
            onChange={(e) => onChangeTest(e.target.value, index)}
          >
            <option value="" selected hidden>
              Select any Test
            </option>

            {each.chemicalDiscipline.map((eachtest) => (
              <option
                key={each.testName}
                value={JSON.stringify(eachtest)}
                className=""
              >
                {eachtest.testName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="test-items-container">
        {testData[index].choosenPhyTest.length > 0 &&
          testData[index].choosenPhyTest.map((eachTest) => (
            <li className="test-item">
              <button className="testitem-deleteBtn">X</button>
              <p>{eachTest.testName}</p>
            </li>
          ))}

        {testData[index].choosenChemTest.length > 0 &&
          testData[index].choosenChemTest.map((eachTest) => (
            <li className="test-item">
              <button className="testitem-deleteBtn">X</button>
              <p>{eachTest.testName}</p>
            </li>
          ))}
      </ul>
    </div>
  );

  const handleOrderBy = (event) => setOrderBy(event.target.value);
  const handleProjectName = (event) => setProjectName(event.target.value);
  const handleCustomerName = (event) => setCustomerName(event.target.value);
  const handleCustomerEmail = (event) => setCustomerEmail(event.target.value);

  const handleCustomerContactName = (event) =>
    setCustomerContactInfo((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));

  const handleCustomerMobleNumber = (event) =>
    setCustomerContactInfo((prevState) => ({
      ...prevState,
      mobile: event.target.value,
    }));

  const handleCustomerContactEmail = (event) =>
    setCustomerContactInfo((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));

  const handleCustomerReference = (event) =>
    setCustomerReference(event.target.value);

  const handleCustomerParentReference = (event) =>
    setParentReference(event.target.value);

  const handleSubject = (event) => setSubject(event.target.value);
  const handleDiscount = (event) => setDiscount(event.target.value);
  const handletransportFee = (event) => setTransportFee(event.target.value);
  const handleDueDate = (event) => setDueDate(event.target.value);
  const handleAssignToEmp = (event) => setAssignToEmp(event.target.value);
  const handleChangeLocation = (event) => setLocation(event.target.value);
  const handleChangeStatus = (event) => setStatus(event.target.value);
  const handleAdditionalInfo = (event) => setAddInfo(event.target.value);

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    console.log("submit event triggered");
  };

  const handleResetEvent = () => {
    console.log("reset event triggered");
  };

  const renderOrderIdElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="orderId">
          Order id
        </label>
        <input
          id="orderId"
          type="text"
          placeholder="KDM/"
          value={orderBy}
          onChange={handleOrderBy}
          className="input-field-100"
        />
      </>
    );
  };

  const renderProjectNameElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="projectName">
          Project name
        </label>
        <input
          id="projectName"
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={handleProjectName}
          className="input-field-100"
        />
      </>
    );
  };

  const renderCustomerNameElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="customerName">
          customer name
        </label>
        <input
          id="customerName"
          type="text"
          placeholder="Enter customer name"
          value={customerName}
          onChange={handleCustomerName}
          className="input-field-100"
        />
      </>
    );
  };

  const renderCustomerEmailElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="customerEmail">
          customer email
        </label>
        <input
          id="customerEmail"
          type="text"
          placeholder="Enter customer email"
          value={customerEmail}
          onChange={handleCustomerEmail}
          className="input-field-100"
        />
      </>
    );
  };

  const renderCostomerContactInfo = () => {
    return (
      <>
        <label className="label-text">Add costomer information</label>
        <div className="customer-contact-info-container">
          <input
            type="text"
            className="input-field-100"
            placeholder="Customer Name"
            onChange={handleCustomerContactName}
            value={customerConcatInfo.name}
          />
          <input
            type="text"
            className="input-field-100"
            placeholder="Customer Mobile"
            onChange={handleCustomerMobleNumber}
            value={customerConcatInfo.mobile}
          />

          <input
            type="text"
            className="input-field-100"
            placeholder="Customer Email"
            onChange={handleCustomerContactEmail}
            value={customerConcatInfo.email}
          />
        </div>
      </>
    );
  };

  const renderCustomerReferenceElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="customerReference">
          customer reference
        </label>
        <input
          id="customerReference"
          type="text"
          placeholder="Enter customer reference"
          value={customerReference}
          onChange={handleCustomerReference}
          className="input-field-100"
        />
      </>
    );
  };

  const renderCustomerParentReference = () => {
    return (
      <>
        <label className="label-text" htmlFor="customerParentReference">
          customer parent reference
        </label>

        <input
          id="customerParentReference"
          type="text"
          placeholder="Enter customer parent reference"
          value={parentReference}
          onChange={handleCustomerParentReference}
          className="input-field-100"
        />
      </>
    );
  };

  const renderSubjectElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="subject">
          subject
        </label>
        <br />
        <input
          id="subject"
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={handleSubject}
          className="input-field-100"
        />
      </>
    );
  };

  const renderLetterElement = () => {
    return (
      <>
        <label className="label-text" htmlFor="letter">
          letter
        </label>
        <br />
        <input id="letter" type="file" className="file-input" />
        <br />
      </>
    );
  };

  const renderDiscount = () => {
    return (
      <>
        <label className="label-text" htmlFor="discount">
          discount
        </label>
        <br />
        <input
          id="discount"
          type="text"
          placeholder="Enter discount"
          value={discount}
          onChange={handleDiscount}
          className="input-field-100"
        />
      </>
    );
  };

  const renderTransportFee = () => {
    return (
      <>
        <label className="label-text" htmlFor="transportFee">
          transport fee
        </label>
        <br />
        <input
          id="transportFee"
          type="text"
          placeholder="Enter transport fee"
          value={transportFee}
          onChange={handletransportFee}
          className="input-field-100"
        />
      </>
    );
  };

  const renderDueDate = () => {
    return (
      <>
        <label className="label-text" htmlFor="dueDate">
          due date
        </label>
        <br />
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={handleDueDate}
          className="input-field-100"
        />
      </>
    );
  };

  const renderAssignedTo = () => {
    return (
      <>
        <label className="label-text">Assign to</label>
        <select
          onChange={handleAssignToEmp}
          className="input-field-100"
          value={assignToEmp}
        >
          {assignToEmployeArray.map((each) => (
            <option key={each.id} className="drop-down-option" value={each.id}>
              {each.name}
            </option>
          ))}
        </select>
      </>
    );
  };

  const renderLocationInput = () => {
    return (
      <>
        <label className="label-text">Select location</label>
        <select
          onChange={handleChangeLocation}
          className="input-field-100"
          value={location}
        >
          {jobLocationArray.map((each) => (
            <option key={each.id} className="drop-down-option" value={each.id}>
              {each.location}
            </option>
          ))}
        </select>
      </>
    );
  };

  const renderStatus = () => {
    return (
      <>
        <label className="label-text">Status</label>
        <select
          onChange={handleChangeStatus}
          className="input-field-100"
          value={status}
        >
          {statusArray.map((each) => (
            <option key={each.id} className="drop-down-option" value={each.id}>
              {each.text}
            </option>
          ))}
        </select>
      </>
    );
  };

  const renderAdditionalInfo = () => {
    return (
      <>
        <label className="label-text" htmlFor="addInfo">
          Additional Info
        </label>
        <textarea
          rows={9}
          id="addInfo"
          onChange={handleAdditionalInfo}
          className="input-field-100 textarea-field"
          value={addInfo}
        ></textarea>
      </>
    );
  };

  const renderButtons = () => (
    <div>
      <button type="submit" className="button">
        Submit
      </button>
      <button type="reset" className="button outline">
        Reset
      </button>
    </div>
  );

  const addOneMoreTest = () => {
    const newTest = {
      allMaterials: materialsData.filter((each) => each.id),
      materialName: "",
      physicalDiscipline: [],
      chemicalDiscipline: [],
      choosenChemTest: [],
      choosenPhyTest: [],
    };

    setTestData((prevState) => [...prevState, newTest]);
  };

  return (
    <>
      {console.log("component rendered")}
      {console.log(testData)}
      <Header />
      <form
        className="create-order-container"
        onReset={handleResetEvent}
        onSubmit={handleSubmitEvent}
      >
        <div className="create-order-inner-container">
          <div>
            {renderOrderIdElement()}
            {renderProjectNameElement()}
            {renderSubjectElement()}
            {renderLetterElement()}
            {renderDiscount()}
            {renderTransportFee()}
            {renderDueDate()}
            {renderAssignedTo()}
            {renderLocationInput()}
            {renderStatus()}
          </div>

          <div>
            {renderCustomerNameElement()}
            {renderCustomerEmailElement()}
            {renderCustomerReferenceElement()}
            {renderCustomerParentReference()}
            {renderCostomerContactInfo()}
            {renderAdditionalInfo()}
            {renderButtons()}
          </div>
        </div>

        <div className="tests-input-container">
          {testData.map((each, index) => {
            return renderChooseMaterialToTest(each, index);
          })}
          <button type="button" className="button" onClick={addOneMoreTest}>
            Add Sample - {testData.length + 1}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateOrder;
