import '../scss/App.scss';
import {  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import FooterRealtor from "./FooterRealtor";
import SearchNavbar from "./SearchNavbar";

class BuyHome extends React.Component {
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
                <SearchNavbar></SearchNavbar>
                <FooterRealtor></FooterRealtor>
            </React.Fragment>
        );
    }
}

export default BuyHome;
