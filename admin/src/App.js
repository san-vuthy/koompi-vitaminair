import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Layouts/login";
import Dashboard from "./components/Pages/dashboard";
import Donationers from "./components/Pages/donationers";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
