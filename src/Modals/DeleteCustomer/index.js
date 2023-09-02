import ReactDOM from "react-dom";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import "./index.css";
// import FinalModal from "../FinalModal";

const DeleteCustomer = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-parent" onClick={props.delete}>
      <div className="modal-body">
        <div className="modal-title-container">
          <h1 className="modal-title">Delete Customer</h1>
          <button type="button" className="modal-close-btn">
            <CgClose />
          </button>
        </div>
        <div className="modal-description">
          <p className="highlighted-text">What can happen ?</p>
          <ul>
            <li>Here you can proceed or withdraw the action.</li>
            <li>
              if you proceed further This customer will be completely removed
              from the Database. You no longer able to see This customer again
            </li>
            <li>Withdraw does not initiate any action</li>
            <li>
              You can register the customer again to to make orders on register
              customers name
            </li>
          </ul>
        </div>
        <div className="modal-buttons-container">
          <button className="button" onClick={props.delete}>
            Proceed
          </button>
          <button className="button" onClick={props.delete}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteCustomer;
