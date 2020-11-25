import React from "react";
import "./style.css";
import myInfo from "../../data/MyInfo.json";

function AboutCard() {
  const mailtotag = "mailto: " + myInfo.email;

  return (
    <div className="aboutCard">
      <h2 className="text-center">{myInfo.name}</h2>
      <div className="img-container text-center">
        <img alt={myInfo.name} src={myInfo.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Phone:</strong>{myInfo.phone}
          </li>
          <li>
            <strong>Location:</strong>{myInfo.location}
          </li>
          <li>
            <strong>Email:</strong> <a href={mailtotag} target="_blank">{myInfo.email}</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href={myInfo.github} target="_blank">{myInfo.github}</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href={myInfo.linkedin} target="_blank">{myInfo.linkedin}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default AboutCard;
