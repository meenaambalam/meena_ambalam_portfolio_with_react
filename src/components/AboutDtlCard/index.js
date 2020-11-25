import React from "react";
import "./style.css";
import myInfo from "../../data/MeenaInfo.json";

function AboutDtlCard() {
  return (
    <div className="aboutDtlCard">
      <h2 className="aboutMe text-center">About Me</h2>
      <hr />
      <div className="content">

        <p>I'm an IT professional with about 20 years of experience in
        various platforms from legacy
        system (Mainframe, COBOL, JCL), Unix platforms and different database like DB2,
                            Oracle, SQL Server.</p>

        <p>I have been recently playing the role of a Business Analyst and decided to take
        break from my work due to
                            the Covid impact to my employer and also due to my inner wanting to explore other skills and opportunities.</p>
         <p>As I have enjoyed the role of a developer and loving to solve problems, I have
        made the decision to switch back to
                            development. I decided to explore in the field of FullStack Web development, which seems to be a good venue to satify the creator within me. </p>
        <p>I hold a Bachelor's degree in Computer Science and Engineering from an
        accredited University in India.

        I am very good in people skills, talking with clients and the customers, and in
                            working with a team. I have excellent analytical, problem solving, investigative skills and compelete things to its perfection.</p>
        <p>Please checkout my Portfolio, that displays various Apps I've deveoped and their respective Github Repositories.</p>
      </div>
    </div>
  );
}

export default AboutDtlCard;
