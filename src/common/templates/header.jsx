import React from "react"
import logo from "../../../static/índice.svg"

export default props => (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <img className="Image" src={logo} alt="Logo" width="30" height="30" />
        </a>
        <button className="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    </nav>
)