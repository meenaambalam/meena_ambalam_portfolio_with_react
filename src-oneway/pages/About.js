import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/Grid";
import PortfolioContext from "../utils/PortfolioContext";
// import "../../public/Assets/Pictures";
import ContactInfo from "../components/ContactInfo/ContactInfo";


function About() {

    const { name, email, phone, github, linkedin } = useContext(PortfolioContext);

    return (
        <Container fluid>
            <Row className="row1">
                <Col size="md-6 red">
                        <ContactInfo displaytitle="About Me"/>
                </Col>
            </Row>

            <Row className="row2">
                <Col size="md-6">
                    {/* <AboutContent />
                    <img src="../../public/Assets/Pictures/LinkedIn_Profile_Pic.jpg" alt="React Image" width="320px" height="320px"> */}
                    <p> I'm an IT professional with about 20 years of experience in various platforms from legacy system</p>
                </Col>
            </Row>
        </Container>
    );
}


export default About;
