import React, { Component } from "react";
import "../../_custom.scss";
import CertificateItem from "./certificate-item";
const certificates = [
    {
        id: 1,
        data: {
            name: "LFC191: Open Source Licensing Basics for Software Developers",
            issuedOn: "September 24, 2021",
            issuedBy: "The Linux Foundation"
        },
    },
    {
        id: 2,
        data: {
            name: "Microsoft Certified: Azure Fundamentals",
            issuedOn: "March 30, 2023",
            issuedBy: "Microsoft"
        },
    }
];
class Certificates extends Component {
    render() {
        return certificates.map((certificate) => (
            <CertificateItem key={certificate.id} certificate={certificate.data}></CertificateItem>
        ));
    }
}

export default Certificates;
