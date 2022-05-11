import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Search from "./components/Search";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={9}
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
                  key="entertainment"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={9}
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
                  key="science"
                  pageSize={9}
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
                  key="sports"
                  pageSize={9}
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
                  key="technology"
                  pageSize={9}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={9}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/search/:url"
              element={<Search key="search" />}
            />
            {/* <Route exact path="/entertainment">
              <News pageSize={9} country="in" category="entertainment" />
            </Route exact>
            <Route exact path="/general">
              <News pageSize={9} country="in" category="general" />
            </Route exact>
            <Route exact path="/health">
              <News pageSize={9} country="in" category="health" />
            </Route exact>
            <Route exact path="/science">
              <News pageSize={9} country="in" category="science" />
            </Route exact>
            <Route exact path="/sports">
              <News pageSize={9} country="in" category="sports" />
            </Route exact>
            <Route exact path="/technology">
              <News pageSize={9} country="in" category="technology" />
            </Route exact> */}
          </Routes>
        </Router>
      </div>
    );
  }
}
