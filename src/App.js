import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import News from "./components/News";
export default class App extends Component {
  // apikey = process.env.REACT_APP_API_KEY;
  apikey = "d7ada9dbf6ab463f93008f45b91cdc5c";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pagesize={9}
                country="in"
                category=""
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pagesize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="entertainment"
                pagesize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="business"
                pagesize={9}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="health"
                pagesize={9}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="science"
                pagesize={9}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="sports"
                pagesize={9}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="technology"
                pagesize={9}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}