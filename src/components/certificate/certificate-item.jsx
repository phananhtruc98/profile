import React, { Component } from "react";
import "../../_custom.scss";

class CertificateItem extends Component {
    constructor(props) {
        super(props);
        this.state = { showButton: true, showMessage: false };
    }
    render() {
        var { certificate } = this.props; // job = this.props.job
        return (
            <div className="border-bottom mb-3">
                <div className="lh-1 mb-1 job-block">
                    <span className="fs-5 fw-bold text-uppercase lh-1">
                        {certificate.name} &nbsp;
                    </span>
                </div>
                <div>
                    <span className="fs-14 fw-bold ">{certificate.issuedBy} </span>
                </div>
                <div>
                    <span className="fs-14">
                        {certificate.issuedOn}
                    </span>
                </div>

            </div >
        );
    }
}

export default CertificateItem;
