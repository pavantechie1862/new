import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import CustomersList from "./Components/CustomersList";
import CompletedOrders from "./Components/CompletedOrders";
import CreateOrder from "./Components/CreateOrder";
import AddCustomer from "./Components/AddCustomer";
import Landing from "./Components/Landing";
import CreateInvoice from "./Components/CreateInvoice";
import URLindicator from "./Components/URLindicator";
import ListOrders from "./Components/ListOrders";
import JobsList from "./Components/JobsList";
import AnalystJobs from "./Components/AnalystJobs";
import PerformaInvoice from "./Components/PerformaInvoice";
import TaxInvoice from "./Components/TaxInvoice";
import CreatedInvoiceList from "./Components/CreatedInvoiceList";
import Home from "./Components/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create-order" component={CreateOrder} />
      <Route exact path="/add-customer" component={AddCustomer} />
      <Route exact path="/customer-list" component={CustomersList} />
      <Route exact path="/completed-orders" component={CompletedOrders} />
      <Route exact path="/create-invoice" component={CreateInvoice} />
      <Route exact path="/url-indicator" component={URLindicator} />
      <Route exact path="/list-orders" component={ListOrders} />
      <Route exact path="/jobs-list" component={JobsList} />
      <Route exact path="/analyst-jobs" component={AnalystJobs} />
      <Route exact path="/performa-invoice" component={PerformaInvoice} />
      <Route exact path="/tax-invoice" component={TaxInvoice} />
      <Route exact path="/created-invoiceList" component={CreatedInvoiceList} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
