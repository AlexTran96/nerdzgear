import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
     <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exect path="/" component={HomePage}/>
        </Switch>
        <Footer/>
      </Router>
     </>
    );
  }
}

export default App;
