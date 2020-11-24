import React from "react";

const PortfolioContext = React.createContext({
  name: "",
  email: "",
  phone: "",
  github: "",
  linkedin: "",
  displaytitle: ""
});

export default PortfolioContext;

