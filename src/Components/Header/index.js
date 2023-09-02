import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setCurrentUserAction } from "../../Redux/Actions/currentUserSetterAction";
import { store } from "../../Redux/store";

const Header = () => {
  const history = useHistory();

  const logoutTriggered = async () => {
    try {
      await signOut(auth);
      store.dispatch(setCurrentUserAction(null));
      history.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  const profileUrl = useSelector((state) => state.currentUserInfo.imageUrl);
  const userName = useSelector((state) => state.currentUserInfo.userName);

  return (
    <>
      <header className="header-container" id="header">
        <div className="header-inner-container">
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="logo" className="kdm-logo" />
            </Link>
          </div>

          <nav id="navbar" className="navbar">
            <ul className="nav-links">
              <li className="dropdown">
                <span>Master Data</span>

                <ul>
                  <li>
                    <Link to="/add-customer">Add Customer</Link>
                  </li>

                  <li>
                    <Link to="/customer-list">Customers list</Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <span>Orders</span>

                <ul>
                  <li>
                    <Link to="/create-order">Create Order</Link>
                  </li>

                  <li>
                    <Link to="/list-orders">Orders List</Link>
                  </li>
                  <li>
                    <Link to="/completed-orders">Completed Orders</Link>
                  </li>
                  <li>
                    <Link to="/url-indicator">URL Indicator</Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <span>Invoice</span>

                <ul>
                  <li>
                    <Link to="/create-invoice">Create Invoice</Link>
                  </li>

                  <li>
                    <Link to="/performa-invoice">Performa Invoice</Link>
                  </li>

                  <li>
                    <Link to="/tax-invoice">Tax Invoice</Link>
                  </li>
                  <li>
                    <Link to="/created-invoiceList">Created Invoice</Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <span>Jobs</span>

                <ul>
                  <li>
                    <Link to="/jobs-list">Jobs List</Link>
                  </li>

                  <li>
                    <Link to="/analyst-jobs">Analyst Jobs</Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <img
                  src={profileUrl !== null ? profileUrl : "/ksajfdfa"}
                  className="profile-avatar"
                  alt="avatar"
                />

                <ul>
                  <li>
                    <Link>
                      Hi {userName !== null ? userName + " !" : "User !"}
                    </Link>
                  </li>
                  <li>
                    <Link>Notifications</Link>
                  </li>
                  <li>
                    <Link>Profile Settings</Link>
                  </li>

                  <button onClick={logoutTriggered} id="login-out-btn">
                    logout
                  </button>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
 