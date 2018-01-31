import React from "react"
import '../../node_modules/jquery/dist/jquery.min'
import '../../node_modules/popper.js/dist/popper'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../common/templates/custom.css"

import Header from "../common/templates/header"

export default props => (
    <div>
        <Header />
        <div className="resizable bg-dark" style={{color: "white", maxWidth: "350px", minHeight: "900px" }}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item ">
                    <a className="nav-link active bg-dark text-primary" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact</div>
            </div>
        </div>
    </div>
)