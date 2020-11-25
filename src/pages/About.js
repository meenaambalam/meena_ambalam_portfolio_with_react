import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import AboutCard from "../components/AboutCard";
import AboutDtlCard from "../components/AboutDtlCard";
import Title from "../components/Title";

function About() {

    return (
        <div className="text-center">
            <Title>About Me</Title>
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
