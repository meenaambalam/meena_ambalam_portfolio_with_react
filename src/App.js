import React from 'react';
import { BrowseRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Container from "./components/Container/Container.js";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Wrapper>
          <Container />
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" content={Portfolio} />
          <Route exact path="/resume" content={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
