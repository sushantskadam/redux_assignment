import "./App.css";
import Products from "./components/Products";
import Nav from "./components/Navp";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/" exact component={Products}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
