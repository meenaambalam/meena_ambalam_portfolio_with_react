import React, { useContext } from "react";
import PortfolioContext from "../../utils/PortfolioContext";


function ContactInfo(props) {

    const { name, email, phone, github, linkedin } = useContext(PortfolioContext);

    const { displaytitle } = "About Me";

    console.log(`printing from contactInfor: ${displaytitle}`);
    console.log(`printing from contactInfor - name: , ${props.name}`);
    console.log(`printing from contactInfor - email: , ${props.ContactInfo}`);
    console.log(`printing from contactInfor - phone: ", ${phone}`);

    return (
        <>
        <h1>${props.displaytitle}</h1>
        <h1>${props.ContactInfo}</h1>
        <h1>${email}</h1>
        <h1>${phone}</h1>
        
        </>
    );
}


export default ContactInfo;

