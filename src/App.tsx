import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./Routes/Components/Header";
import Skills from "./Routes/Skills";
import Project from "./Routes/Project";
import Profile from "./Routes/Profile";
// import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>최 정 윤</h1>
    //     <p>frontend developer</p>
    //   </header>
    //   <header className="App-header">
    //     <h1>최 정 윤</h1>
    //     <p>frontend developer</p>
    //   </header>
    //   <section className="About">
    //     <h2>About Me</h2>
    //     <p>
    //       Hello! I'm a passionate web developer with experience in React,
    //       JavaScript, and more.
    //     </p>
    //   </section>
    //   <section className="Projects">
    //     <h2>Projects</h2>
    //     <div className="Project">
    //       <h3>Project 1</h3>
    //       <p>Description of Project 1.</p>
    //     </div>
    //     <div className="Project">
    //       <h3>Project 2</h3>
    //       <p>Description of Project 2.</p>
    //     </div>
    //     {/* Add more projects as needed */}
    //   </section>
    //   <section className="Contact">
    //     <h2>Contact</h2>
    //     <p>Email: your.email@example.com</p>
    //     <p>LinkedIn: linkedin.com/in/yourusername</p>
    //     {/* Add more contact information as needed */}
    //   </section>
    // </div>
  );
}

export default App;
