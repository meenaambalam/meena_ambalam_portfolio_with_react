import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import AboutCard from "../components/AboutCard";
import AboutDtlCard from "../components/AboutDtlCard";

function About(props) {
    console.log("props within About:", props);
    return (
        <div>
            <p className="text-center h5"></p>
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
