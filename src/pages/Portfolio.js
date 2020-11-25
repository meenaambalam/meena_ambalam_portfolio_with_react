import React from "react";
import Title from "../components/Title";
import PortfolioCard from "../components/PortfolioCard";
import portfolio from "../data/MeenaPortfolio.json";

function Portfolio() {

  console.log("Portfolio Infor:", portfolio);

  return (

    <div className="card-deck">
      <Title>Portfolio List</Title>
        {portfolio.map(data => (
          <PortfolioCard
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            applicationURL={data.applicationURL}
            githubRepo={data.githubRepo}
          />
        ))}
    </div>
  );
}

export default Portfolio;
