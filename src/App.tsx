import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Skills from "./Routes/Skills";
import Project from "./Routes/Project";
import Profile from "./Routes/Profile";
// import Header from "./components/header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Profile />} />
        <Route path={process.env.PUBLIC_URL + "/skills"} element={<Skills />} />
        <Route
          path={process.env.PUBLIC_URL + "/project"}
          element={<Project />}
        />
      </Routes>
    </Router>
  );
}

export default App;
