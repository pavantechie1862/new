import React from "react";
import Header from "../Header";
import "./index.css";

const Home = () => {
  return (
    <>
      <Header />

      <div className="home-container-forHome">
        <div className="welcome-container-forHome">
          <h1 className="landing-title fade-down">WELCOME TO KDM LIMS</h1>
          <p className="landing-caption">
            Experienced and Excellence in Material testing services
          </p>

          {/* <p className="landing-caption">We never left any stone unturned and are constantly one step ahead of the obstacles, striving to provide the client with satisfactory service as promised.</p> */}

          <p className="landing-description">
            At Quality Control Labs, we specialize in material testing services
            with LIMS integration. Our modern laboratory facilities, combined
            with our skilled technicians, ensure accurate analysis and
            streamlined data management. Contact us today to receive a detailed
            quote customized to your specific testing needs.
          </p>

          {/* <p className="landing-description">Integrity, Customer Delight, Social Commitment.
            </p> */}
        </div>
      </div>
    </>
  );
};

export default Home;
