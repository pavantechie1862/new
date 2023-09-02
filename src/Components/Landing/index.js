import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./index.css";
import { useHistory } from "react-router-dom";
import { store } from "../../Redux/store";
import { setCurrentUserAction } from "../../Redux/Actions/currentUserSetterAction";

const Landing = () => {
  const auth = getAuth();
  const history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      history.replace("/customer-list");
    }
  });

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      store.dispatch(setCurrentUserAction(auth.currentUser));
      history.replace("/home");
    } catch (err) {
      console.error(err.message);
    }
  };

  const getStartedTriggered = () => {
    signInWithGoogle();
  };

  return (
    <>
      <div className="welcome-container-forLanding">
        <h1 className="landing-title fade-down">WELCOME TO KDM LIMS</h1>
        <p className="landing-caption">
          Experienced and Excellence in Material testing services
        </p>
        {/* <p className="landing-caption">We never left any stone unturned and are constantly one step ahead of the obstacles, striving to provide the client with satisfactory service as promised.</p> */}
        <p className="landing-description">
          At Quality Control Labs, we specialize in material testing services
          with LIMS integration. Our modern laboratory facilities, combined with
          our skilled technicians, ensure accurate analysis and streamlined data
          management. Contact us today to receive a detailed quote customized to
          your specific testing needs.
        </p>
        <button
          type="button"
          className="landing-btn"
          onClick={getStartedTriggered}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Landing;
