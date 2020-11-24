import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import PortfolioContext from "./utils/PortfolioContext";
// import Wrapper from "./components/Wrapper/Wrapper.js";
// import Container from "./components/Container/Container.js";
import './App.css';


function App() {

  const [userInfo, setUserInfo] = useState({
    name: "Meena Ambalam",
    email: "meena.a.ambalam@gmail.com",
    phone: "612-203-2006",
    github: "https://github.com/meenaambalam",
    linkedin: "https://www.linkedin.com/in/meena-ambalam-44b7b98/"
  })

  const [displayTitle, setDisplayTitle] = useState([]);
  const contextObj = { userInfo, displayTitle, setUserInfo, setDisplayTitle };


  return (
    <PortfolioContext.Provider value={contextObj}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path={["/", "/about"]}>
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </PortfolioContext.Provider>
  );
}

export default App;
