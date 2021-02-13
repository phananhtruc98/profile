import React, { Component } from "react";
import "../../_custom.scss";
import ContactItem from "./contact-item";
import PhoneCall from "../../assets/images/icon/phone-call.svg";
import Mail from "../../assets/images/icon/mail.svg";
import Github from "../../assets/images/icon/github.svg";
import MapPin from "../../assets/images/icon/map-pin.svg";
const contacts = [
    {
        id: 1,
        iconUrl: PhoneCall,
        data: "+0704569020",
    },
    {
        id: 2,
        iconUrl: Mail,
        data: "anhtrucphanit@gmail.com",
    },
    {
        id: 3,
        iconUrl: Github,
        data: "https://github.com/phananhtruc98",
    },
    {
        id: 4,
        iconUrl: MapPin,
        data: "Ho Chi Minh City",
    },
];
class Contact extends Component {
    render() {
        return contacts.map((contactItem) => (
            <ContactItem
                key={contactItem.id}
                iconUrl={contactItem.iconUrl}
                data={contactItem.data}
            ></ContactItem>
        ));
    }
}

export default Contact;
