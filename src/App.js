import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import Gallery from "./pages/Gallery";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProfileImage from "./Assets/Pictures/LinkedIn_Profile_Pic.jpg";

function App() {

  const [state, setState] = useState({
    name: "Meena Ambalam",
    image: ProfileImage,
    email: "meena.a.ambalam@gmail.com",
    phone: "612-203-2006",
    github: "https://github.com/meenaambalam",
    linkedin: "https://www.linkedin.com/in/meena-ambalam-44b7b98/"
  });

  const [portfolio, setPortfolio] = useState([]);
  const [portfolioIndex, setportfolioIndex] = useState(0);

  // useEffect(() => {
  //   setState(prevState => ({
  //     ...prevState, newState: {
  //       name: "Meena Ambalam",
  //       email: "meena.a.ambalam@gmail.com",
  //       phone: "612-203-2006",
  //       github: "https://github.com/meenaambalam",
  //       linkedin: "https://www.linkedin.com/in/meena-ambalam-44b7b98/"
  //     }
  //   }))
  // },[])

  return (
    <Router>
      <div>
        <Navigationbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/about"]}>
              <About 
              name={state.name}
              image={state.image} 
              email={state.email} 
              phone={state.phone}
              github={state.github}
              linkedin={state.linkedin} />
            </Route>
            <Route exact path="/portfolio">
              <Gallery name={state.name} />
            </Route>
            <Route exact path="/resume">
              <Resume 
              name={state.name} 
              email={state.email} 
              phone={state.phone}
              github={state.github}
              linkedin={state.linkedin} />
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
