// import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, About, Projects, Home } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path="/" exact component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
