import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, About, Projects, Home, Footer } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
