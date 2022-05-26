import '../scss/App.scss';
import {  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Home from "./Home";
import NavbarRealtor from "./NavbarRealtor";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendTitles: [
                { title: "Recommend", link: "#", api: "#" },
                { title: "Lastest posts", link: "#", api: "#" },
                { title: "Upcoming", link: "#", api: "#" },
            ],
            testTitle: "test",
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavbarRealtor></NavbarRealtor>
            </React.Fragment>
        );
    }
}

export default App;
