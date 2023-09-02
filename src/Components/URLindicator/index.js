import { useState } from "react";
import Header from "../Header";
import "./index.css";

const URLindicator = () => {
  const [nabl, setNabl] = useState("");
  const [nonNabl, setNonNabl] = useState("");

  const handleOnchangeNabl = (event) => setNabl(event.target.value);
  const hanleOnchangeNonNabl = (event) => setNonNabl(event.target.value);

  const renderUpdateNabl = () => {
    return (
      <>
        <label className="label-text" htmlFor="nabl">
          Nabl Update
        </label>
        <br />
        <input
          id="nabl"
          type="text"
          placeholder=""
          value={nabl}
          onChange={handleOnchangeNabl}
          className="input-field-100"
        />
      </>
    );
  };

  const renderUpdateNonNabl = () => {
    return (
      <>
        <label className="label-text" htmlFor="non-nabl">
          non-Nabl
        </label>
        <br />
        <input
          id="non-nabl"
          type="text"
          placeholder=""
          value={nonNabl}
          onChange={hanleOnchangeNonNabl}
          className="input-field-100"
        />
      </>
    );
  };

  return (
    <div className="url-indicator-container">
      <Header />
      <div className="usl-indicator-inner-container">
        <div className="indicator half-part">
          <p className="url-highlighted-text">indicator</p>
          <p>
            Nabl count = <span className="spanned-text">23</span>
          </p>
          <p>
            Non Nabl count = <span className="spanned-text">1972</span>
          </p>
        </div>
        <div className="indicator half-part">
          <p className="url-highlighted-text">updater</p>
          {renderUpdateNabl()}
          {renderUpdateNonNabl()}
          <button className="button" type="button">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default URLindicator;
