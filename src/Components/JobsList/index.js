import React, { useState } from "react";
import Header from "../Header";
import { FcSearch } from "react-icons/fc";
import "./index.css";

const JobsListTable = () => {
  return (
    <div className="outer-container">
      <div className="JobsListTable-final-table-container">
        <div className="table-container-for-jobslist">
          <table className="table-jobsList">
            <thead className="table-head-jobsList">
              <tr>
                <th>Job Id</th>
                <th>Material</th>
                <th>Sample</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="table-body-jobsList">
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
                <td>Reinforcement Steel - Fe-550</td>
                <td>12.5mm & 20mm</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>08/2022/4665/CA/PhyNabl/1</td>
                <td>Coarse Aggregates</td>
                <td>10mm</td>
                <td>In Progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const JobsList = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    // Perform filter logic here based on the selected filter
    // You can use the selectedFilter value to filter your data
  };

  return (
    <>
      <Header />

      <div className="outer-title-and-search-container-for-jobs">
        <div className="title-and-search-container-for-jobs">
          <div className="heading-container-for-jobs">
            <h1 className="jobsList-title">
              <span className="first-letters">J</span>obs{" "}
              <span className="first-letters">L</span>ist
            </h1>
          </div>

          <div className="final-search-container-for-jobs">
            <div className="search-container">
              <div className="search-icon-container">
                <input
                  type="text"
                  placeholder="Search..."
                  // Add your search logic here
                  className="search-input"
                />

                <div className="search-logo-container">
                  <FcSearch className="search-icon" />
                </div>
              </div>

              <select
                className="filter-select"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option value="">Category</option>
                <option value="jobId">Job Id</option>
                <option value="material">Material</option>
                <option value="sample">Sample</option>
                <option value="status">Status</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="hr-container">
        <hr className="hr-for-JobsList" />
      </div>

      <JobsListTable />
    </>
  );
};

export default JobsList;
