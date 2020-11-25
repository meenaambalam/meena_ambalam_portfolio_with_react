// import { GitHub } from "@material-ui/icons";
import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";



function About(props) {
    console.log("props within About:", props);
    return (
        <div>
            <h1 className="text-center">About Me</h1>
            <p className="text-center h5"></p>
            <Row>
                <Col size="md-6">
                    <p>CArd with Picture and etc.</p>
                    {/* <CardHeading title={props.name} />
                    <CardImg image={props.image} />
                    <CardBody profileUrl={props.github} /> */}
                </Col>

                <Col size="md-6">
                    <p> card with text</p>
                    <p>I'm an IT professional with about 20 years of experience in
                    various platforms from legacy
                    system (Mainframe, COBOL, JCL), Unix platforms and different database like DB2,
                    Oracle, SQL Server.
                    <br />
                    I have been recently playing the role of a Business Analyst and decided to take
                    break from my work due to
                    the Covid impact to my employer and also due to my inner wanting to explore
                    other skills and opportunities.
                    <br />
                    As I have enjoyed the role of a developer and loving to solve problems, I have
                    made the decision to switch back to
                    development. I decided to explore in the field of FullStack Web development,
                    which seems to be a good venue to satify the creator within me.
                    <br />
                    I hold a Bachelor's degree in Computer Science and Engineering from an
                    accredited University in India.

                    I am very good in people skills, talking with clients and the customers, and in
                    working with a team. I have excellent analytical,
                    problem solving, investigative skills and compelete things to its perfection.

                    <br /><br />
                        Please feel free to checkout my <a href="./portfolio.html">Portfolio</a>, that displays various Apps I've developed!
                    </p>
                                        
                    </Col>
            </Row>
        </div>
    );
}


export default About;
