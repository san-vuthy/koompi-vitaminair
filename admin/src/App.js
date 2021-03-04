import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Layouts/login";
import Dashboard from "./components/Pages/dashboard";
import Donationers from "./components/Pages/donationers";
import AddInitation from "./components/Pages/Initation/addInitation";
import AllInitation from "./components/Pages/Initation/allInitation";
import EditInitation from "./components/Pages/Initation/editInitation";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/admin/donationers"
            component={Donationers}
          />
          <PrivateRoute
            exact
            path="/admin/addinitation"
            component={AddInitation}
          />
          <PrivateRoute
            exact
            path="/admin/initations"
            component={AllInitation}
          />
          <PrivateRoute
            exact
            path="/admin/edit-initation/:id"
            component={EditInitation}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
