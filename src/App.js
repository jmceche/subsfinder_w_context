import React from "react";
import Navbar from "./components/layout/Navbar";
import NameSearch from "./components/subs/NameSearch";
import HashSearch from "./components/subs/HashSearch";
import SubList from "./components/subs/SubList";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import ClearSub from "./components/subs/ClearSub";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SubState from "./context/subtitles/SubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <SubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container grid-2'>
              <div id='left'>
                <Alert alert={alert} />
                <Switch>
                  <Route exact path='/' component={NameSearch} />
                  <Route exact path='/hash' component={HashSearch} />
                  <Route exact path='/about' component={About} />
                </Switch>
                <ClearSub />
              </div>
              <div id='right' className='container'>
                <SubList />
              </div>
            </div>
          </div>
        </Router>
      </AlertState>
    </SubState>
  );
};

export default App;
