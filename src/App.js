import "./App.css";

import React, { Component } from "react";
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import News from "./components/News";
export default class App extends Component {
  c = "somu";
  render() {
    return (
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={9} country="in" category= ""/>} />
            <Route exact path="/general" element={<News key="general" pagesize={9} country="in" category= "general"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={9} country="in" category= "entertainment"/>} />
            <Route exact path="/business" element={<News key="business" pagesize={9} country="in" category="business"/>} />
            <Route exact path="/health" element={<News key="health" pagesize={9} country="in" category= "health"/>} />
            <Route exact path="/science" element={<News key="science" pagesize={9} country="in" category= "science"/>} />
            <Route exact path="/sports" element={<News key="sports" pagesize={9} country="in" category= "sports"/>} />
            <Route exact path="/technology" element={<News key="technology" pagesize={9} country="in" category= "technology"/>} />
          </Routes>
        </Router>
    );
  }
}