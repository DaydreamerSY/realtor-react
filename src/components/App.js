import './App.scss';
import {  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavbarRealtor from "./Navbar/NavbarRealtor";
import FooterRealtor from "./Footer/FooterRealtor";

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
            <>
                <NavbarRealtor></NavbarRealtor>
                <FooterRealtor></FooterRealtor>
            </>
        );
    }
}

export default App;
