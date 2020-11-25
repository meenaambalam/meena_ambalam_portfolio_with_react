import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {

  return (
    <Router>
      <div>
        <Navigationbar />
        <Wrapper>
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
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
