import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import News from "./components/News";



const App = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  const apikey = "d7ada9dbf6ab463f93008f45b91cdc5c";
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar color="#f11946" progress={progress} />
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={
          <News setProgress={setProgress} apikey={apikey} key="general" pagesize={9} country="in" category="" />
        }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
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
              setProgress={setProgress}
              apikey={apikey}
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
              setProgress={setProgress}
              apikey={apikey}
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
              setProgress={setProgress}
              apikey={apikey}
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
              setProgress={setProgress}
              apikey={apikey}
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
              setProgress={setProgress}
              apikey={apikey}
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
              setProgress={setProgress}
              apikey={apikey}
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

export default App