import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { NoMatch, Saved, Search } from './pages'
import Nav from './components/Nav'
import Hero from './components/Hero'

import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={NoMatch} />
      </div>
    </Router>
  );
}

export default App;
