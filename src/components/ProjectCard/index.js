import React from "react";
import Col from "../Col";
import "./style.css";

function ProjectCard(props) {

  console.log(props);

  return (
    <>
      <Col size="md-4">
        <div className="portfolioCard">
          <h2 className="text-center">{props.name}</h2>
          <div className="img-container text-center">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Description:</strong>{props.appDescription}
              </li>
              <li>
                <strong>Application URL:</strong> <a href={props.applicationURL} target="_blank" rel="noreferrer">{props.applicationDisp}</a>
              </li>
              <li>
                <strong>GitHub Repo:</strong> <a href={props.githubRepo} target="_blank" rel="noreferrer">{props.githubDisp}</a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProjectCard;
