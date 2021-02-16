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
        data: "+84704569020",
        type: "Phone"
    },
    {
        id: 2,
        iconUrl: Mail,
        data: "anhtrucphanit@gmail.com",
        type: "Mail"
    },
    {
        id: 3,
        iconUrl: Github,
        data: "https://github.com/phananhtruc98",
        type: "Link"
    },
    {
        id: 4,
        iconUrl: MapPin,
        data: "Ho Chi Minh City",
        type: ""
    },
];
class Contact extends Component {
    render() {
        return contacts.map((contactItem) => (
            <ContactItem
                key={contactItem.id}
                iconUrl={contactItem.iconUrl}
                data={contactItem.data}
                type={contactItem.type}
            ></ContactItem>
        ));
    }
}

export default Contact;
