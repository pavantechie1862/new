import Header from "../Header";
import "./index.css";

const CreateInvoice = () => {
  return (
    <>
      <Header />

      <div className="outer-title-and-search-container-for-CreateInvoice">
        <div className="title-and-search-container-for-CreateInvoice">
          <div className="heading-container-for-CreateInvoice">
            <h1 className="jobsList-title-for-CreateInvoice">
              <span className="first-letters-for-CreateInvoice">I</span>nvoice{" "}
              <span className="first-letters-for-CreateInvoice">C</span>reation
            </h1>
          </div>
        </div>
      </div>

      <hr className="hr-for-CreateInvoice" />

      <div className="final-invoice-container">
        <div className="invoice-form-container">
          <div className="invoice-form">
            <form>
              <div className="form-group-for-CreateInvoice">
                <label className="labels-for-createInvoice" htmlFor="order-id">
                  Order Id :
                </label>
                <input
                  placeholder="KDM/"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="order-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="client-name"
                >
                  Client Name :
                </label>
                <input
                  placeholder="Enter Client Name"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="client-name"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="address-id"
                >
                  Address :
                </label>
                <input
                  placeholder="Enter Address"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="address-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="projectName-id"
                >
                  Project Name :
                </label>
                <input
                  placeholder="Enter Project Name"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="projectName-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="siteAddress-id"
                >
                  Site Address :
                </label>
                <input
                  placeholder="Enter Site Address"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="siteAddress-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label className="labels-for-createInvoice" htmlFor="gstin-id">
                  GSTIN :
                </label>
                <input
                  placeholder="Enter GSTIN"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="gstin-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label className="labels-for-createInvoice" htmlFor="ref-id">
                  Ref :
                </label>
                <input
                  placeholder="Enter Ref No"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="ref-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label className="labels-for-createInvoice" htmlFor="pan-id">
                  PAN :
                </label>
                <input
                  placeholder="Enter PAN"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="pan-id"
                  name="clientName"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="taxInvoice-number"
                >
                  Tax Invoice Number :
                </label>
                <input
                  placeholder="Enter Tax Invoice Number"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="taxInvoice-number"
                  name="invoiceNumber"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="invoice-date"
                >
                  Invoice Date :
                </label>
                <input
                  className="inputs-for-createInvoice"
                  type="date"
                  id="invoice-date"
                  name="invoiceDate"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="subject-id"
                >
                  Subject :
                </label>
                <input
                  placeholder="Enter Subject"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="subject-id"
                  name="dueDate"
                  required
                />
              </div>
              <div className="sample-group-container-for-createInvoice">
                <div>
                  <label
                    className="sample-labels-for-createInvoice"
                    htmlFor="sample-id"
                  >
                    Sample 1:
                  </label>
                  <input
                    placeholder="Enter Sample"
                    className="sampleTitle-inputs-for-createInvoice"
                    type="text"
                    id="sample-id"
                    name="dueDate"
                    required
                  />
                </div>

                <div>
                  <label
                    className="sample-labels-for-createInvoice"
                    htmlFor="qty-id"
                  >
                    QTY :
                  </label>
                  <input
                    placeholder="Enter QTY"
                    className="sample-inputs-for-createInvoice"
                    type="text"
                    id="qty-id"
                    name="dueDate"
                    required
                  />
                </div>

                <div>
                  <label
                    className="sample-labels-for-createInvoice"
                    htmlFor="price-id"
                  >
                    Price :
                  </label>
                  <input
                    placeholder="Enter Price"
                    className="sample-inputs-for-createInvoice"
                    type="text"
                    id="price-id"
                    name="dueDate"
                    required
                  />
                </div>

                <div>
                  <label
                    className="sample-labels-for-createInvoice"
                    htmlFor="testName-id"
                  >
                    Test Name :
                  </label>
                  <input
                    placeholder="Enter Test Name"
                    className="testName-sample-inputs-for-createInvoice"
                    type="text"
                    id="testName-id"
                    name="dueDate"
                    required
                  />
                </div>
              </div>
              <div className="addSample-submitButton-container">
                <button
                  type="button"
                  className="createInvoice-addSample-button"
                >
                  Add Sample
                </button>
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="basic-amount"
                >
                  Basic Amount :
                </label>
                <p className="basicAmount-for-createInvoice" id="basic-amount">
                  0
                </p>
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="discount-id"
                >
                  Discount :
                </label>
                <input
                  placeholder="Enter Discount"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="discount-id"
                  name="dueDate"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="discounted-price"
                >
                  Discounted Price :
                </label>
                <p
                  className="basicAmount-for-createInvoice"
                  id="discounted-price"
                >
                  0
                </p>
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="transportFee"
                >
                  Transportation Fee :
                </label>
                <input
                  placeholder="Enter Transportation Fee"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="transportFee"
                  name="dueDate"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label className="labels-for-createInvoice" htmlFor="gstFee">
                  GST 18% :
                </label>
                <input
                  placeholder="Enter GST"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="gstFee"
                  name="dueDate"
                  required
                />
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="grandTotal-price"
                >
                  Grand Total :
                </label>
                <p
                  className="basicAmount-for-createInvoice"
                  id="grandTotal-price"
                >
                  0
                </p>
              </div>
              <div className="form-group-for-CreateInvoice">
                <label
                  className="labels-for-createInvoice"
                  htmlFor="paymentTerms"
                >
                  Payment Terms :
                </label>
                <input
                  placeholder="Enter Payment Terms"
                  className="inputs-for-createInvoice"
                  type="text"
                  id="paymentTerms"
                  name="dueDate"
                  required
                />
              </div>
              {/* <div className="form-group-for-CreateInvoice">
                          <label className="labels-for-createInvoice" htmlFor="description">Description :</label>
                          <textarea className="textarea-for-createInvoice" id="description" name="description" rows="4" required></textarea>
                        </div> */}
              <div className="form-group-for-CreateInvoice">
                <label className="labels-for-createInvoice" htmlFor="notes">
                  Additional Info :
                </label>
                <textarea
                  placeholder="Enter Additional Info"
                  className="textarea-for-createInvoice"
                  id="notes"
                  name="notes"
                  rows="4"
                ></textarea>
              </div>
              <div className="createInvoice-submitButton-container">
                <button className="createInvoice-submitButton" type="submit">
                  Show Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInvoice;
