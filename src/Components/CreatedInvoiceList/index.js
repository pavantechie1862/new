import React, { useState } from "react";
import Header from "../Header";
import { FcSearch } from "react-icons/fc";
import "./index.css";

const CreatedInvoiceListTable = () => {
  return (
    <div className="outer-container-for-createdInvoice">
      <div className="table-container-for-createdInvoice">
        <div className="createdInvoice-button-container">
          <button className="createdInvoice-excelButton">Export Excel</button>
        </div>

        <table className="createdInvoice-table">
          <thead className="table-head-createdInvoice">
            <tr>
              <th>Order Id</th>
              <th>Invoice Number</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Site Address</th>
              <th>Total Amount</th>
              <th>Amount Paid</th>
              <th>Balance Amount</th>
              <th>Amount Status</th>
            </tr>
          </thead>
          <tbody className="table-body-createdInvoice">
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
            <tr>
              <td>04/2022/3770</td>
              <td>HYD/0001</td>
              <td>04-04-2022</td>
              <td>BNP DEVELOPERS</td>
              <td></td>
              <td>834 rs</td>
              <td>834 rs</td>
              <td>0 rs</td>
              <td>
                <button className="tax-button-for-createdInvoice">
                  Add Amount
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CreatedInvoiceList = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    // Perform filter logic here based on the selected filter
    // You can use the selectedFilter value to filter your data
  };

  return (
    <>
      <Header />

      <div className="outer-title-and-search-container-for-createdInvoice">
        <div className="title-and-search-container-for-createdInvoice">
          <div className="heading-container-for-createdInvoice">
            <h1 className="createdInvoice-title">
              <span className="first-letters">I</span>nvoice{" "}
              <span className="first-letters">L</span>ist
            </h1>
          </div>

          <div className="final-search-container-for-createdInvoice">
            <div className="search-container-createdInvoice">
              <div className="search-icon-container-createdInvoice">
                <input
                  type="text"
                  placeholder="Search..."
                  // Add your search logic here
                  className="search-input-createdInvoice"
                />

                <div className="search-logo-container-createdInvoice">
                  <FcSearch className="search-icon-createdInvoice" />
                </div>
              </div>

              <select
                className="filter-select-createdInvoice"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option value="">Category</option>
                <option value="orderId">Order Id</option>
                <option value="invoiceNum">Invoice Number</option>
                <option value="customerName">Customer Name</option>
                <option value="amountPaid">Amount Paid</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="hr-container">
        <hr className="hr-for-createdInvoice" />
      </div>

      <CreatedInvoiceListTable />
    </>
  );
};

export default CreatedInvoiceList;
