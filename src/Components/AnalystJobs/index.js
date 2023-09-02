import Header from "../Header";
import "./index.css";

const AnalystJobsTable = () => {
  return (
    <div className="outer-container">
      <div className="table-container-for-analyst">
        <table className="table-for-analyst">
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Material</th>
              <th>Test Name</th>
              <th>Sample</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>send for calculating</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>send for calculating</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>send for calculating</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>
              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>10/2022/4878/RS Fe-550/CheNabl/1</td>
              <td>Reinforcement Steel - Fe-550</td>
              <td></td>
              <td>12.5mm & 20mm</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>08/2022/4665/CA/PhyNabl/1</td>

              <td>Coarse Aggregates</td>
              <td></td>
              <td>10mm</td>
              <td>In Progress</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AnalystJobs = () => {
  return (
    <>
      <Header />

      <div className="outer-title-and-search-container-for-analyst">
        <div className="title-and-search-container-for-analyst">
          <div className="heading-container">
            <h1 className="jobsList-title">
              <span className="first-letters">J</span>obs With{" "}
              <span className="first-letters">A</span>nalyst
            </h1>
          </div>
        </div>
      </div>

      <hr className="hr-for-analystJobs" />

      <AnalystJobsTable />
    </>
  );
};

export default AnalystJobs;
