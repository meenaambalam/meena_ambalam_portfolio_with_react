import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./pages/Project";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {

  // The Page route is managed by Route component from react-router-dom. The Switch acts as a switch to choose the specific page based on the path condition.
  // Any route that is not defined will fall into the "NoMatch" route.
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/about"]}>
              <About />
            </Route>
            <Route exact path="/project">
              <Project />
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
