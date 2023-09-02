import React, { useState } from "react";
import Header from "../Header";
import { FcSearch } from "react-icons/fc";
import "./index.css";

const PerformaListTable = () => {
  return (
    <div className="outer-container-for-performaTable">
      <div className="table-container-for-performaTable">
        <div className="performaInvoice-buttons-container">
          <button className="performaInvoice-selectButton">Select</button>
          <button className="performaInvoice-signButton">Sign</button>
        </div>

        <table className="performaList-table">
          <thead className="table-head-performaList">
            <tr>
              <th>Order Id</th>
              <th>Project Name</th>
              <th>Customer Name</th>
              <th>Invoice Number</th>
              <th>Date</th>
              <th>Invoice Status</th>
              <th>Total Amount</th>
              <th>Update Invoice</th>
            </tr>
          </thead>
          <tbody className="table-body-performaList">
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>07/2023/10237-1</td>
              <td>Four Laning of left-over works</td>
              <td>T.T.K. CONSTRUCTIONS</td>
              <td>PI/2023/0512</td>
              <td>19/7/2023</td>
              <td>
                <button className="tax-button-for-performaInvoice">
                  Convert to Tax
                </button>
              </td>
              <td>972002 rs</td>
              <td>
                <select className="filter-select-to-updateInvoice">
                  <option value="">Action</option>
                  <option value="updateInvoice">Update Invoice</option>
                  <option value="updateUserInfo">Update User Info</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PerformaInvoice = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    // Perform filter logic here based on the selected filter
    // You can use the selectedFilter value to filter your data
  };

  return (
    <>
      <Header />

      <div className="outer-title-and-search-container-for-performaInvoice">
        <div className="title-and-search-container-for-performaInvoice">
          <div className="heading-container-for-performaInvoice">
            <h1 className="performaInvoice-title">
              <span className="first-letters">P</span>erforma{" "}
              <span className="first-letters">I</span>nvoice
            </h1>
          </div>

          <div className="final-search-container-for-performaInvoice">
            <div className="search-container-performaInvoice">
              <div className="search-icon-container-performaInvoice">
                <input
                  type="text"
                  placeholder="Search..."
                  // Add your search logic here
                  className="search-input-performaInvoice"
                />

                <div className="search-logo-container-performaInvoice">
                  <FcSearch className="search-icon-performaInvoice" />
                </div>
              </div>

              <select
                className="filter-select-performaInvoice"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option value="">Category</option>
                <option value="orderId">Order Id</option>
                <option value="projectName">Project Name</option>
                <option value="customerName">Customer Name</option>
                <option value="customerNum">Customer No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="hr-container">
        <hr className="hr-for-performaInvoice" />
      </div>

      <PerformaListTable />
    </>
  );
};

export default PerformaInvoice;
