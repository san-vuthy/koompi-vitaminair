import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Layouts/login";
import Dashboard from "./components/Pages/dashboard";
import Donationers from "./components/Pages/donationers";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/donationers" component={Donationers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
