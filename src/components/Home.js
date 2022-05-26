import '../scss/App.scss';
import {  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavbarRealtor from "./NavbarRealtor";
import FooterRealtor from "./FooterRealtor";
import IndexSearch from "./IndexSearch";
import TitleCardContainer from './TitleCardContainer';

class Home extends React.Component {
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
                {/*<NavbarRealtor></NavbarRealtor>*/}
                <IndexSearch ></IndexSearch>
                <TitleCardContainer recommendTitles={this.state.recommendTitles} testTitle={this.state.testTitle}></TitleCardContainer>
                <FooterRealtor></FooterRealtor>
            </React.Fragment>
        );
    }
}

export default Home;
