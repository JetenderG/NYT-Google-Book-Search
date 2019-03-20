import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar"
import SavedPage from "./pages/savePage";
import SearchPage from "./pages/searchPage";
import JumboBox from "./components/JumboBox" 
class App extends Component {
  render() {
    return (
     <Router>

       <NavBar />
       <JumboBox />
       <div>


      <Switch>
      <Route exact path ="/search" component = {SearchPage} />
      <Route exact path ="/saved" component = {SavedPage} />

      </Switch>




       </div>




     </Router>

    );
  }
}

export default App;
