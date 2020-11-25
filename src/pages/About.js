import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import AboutCard from "../components/AboutCard";
import AboutDtlCard from "../components/AboutDtlCard";
import Header from "../components/Header";

function About() {

    return (
        <div className="text-center">
            <Header>About Me</Header>
            <hr/>
            <Row>
                <Col size="md-4">
                    <AboutCard />
                </Col>

                <Col size="md-8">
                    <AboutDtlCard />
                </Col>
            </Row>
        </div>
    );
}


export default About;
