import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

const App = () => {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
    </div>
    </Router>

  );
}

export default App;