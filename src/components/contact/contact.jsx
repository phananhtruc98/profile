import React, {Component} from "react";
import "../../_custom.scss";
import ContactItem from "./contact-item";
import PhoneCall from '../../assets/images/icon/phone-call.svg';
const contacts = [
    {
        id: 1,
        iconUrl: PhoneCall,
        data: "+P han ANh trucs",
    },
];
class Contact extends Component {
    render() {
        return contacts.map((contactItem) => (
            <ContactItem key= {contactItem.id}
                iconUrl={contactItem.iconUrl}
                data={contactItem.data}
            ></ContactItem>
        ));
    }
}

export default Contact