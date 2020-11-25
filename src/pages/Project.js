import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import portfolio from "../data/MyPortfolio.json";

function Project() {

  console.log("Portfolio Infor:", portfolio);

  return (
      <div>
        <Header>My Portfolio</Header>
        <hr/>
        <div className="card-deck">
        {portfolio.map(data => (
          <ProjectCard
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            applicationURL={data.applicationURL}
            githubRepo={data.githubRepo}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
