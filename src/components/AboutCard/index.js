import React from "react";
import "./style.css";

function PortfolioCard(props) {

 console.log(props);

  return (
    <div className="card">
      <h2 className="text-center">{props.name}</h2>
      <div className="img-container text-center">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Application URL:</strong> <a href={props.applicationURL}>{props.applicationURL}</a>
          </li>
          <li>
            <strong>GitHub Repo:</strong> <a href={props.githubRepo}>{props.githubRepo}</a>
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default PortfolioCard;
