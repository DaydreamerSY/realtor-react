import {Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import SearchNavbar from "./SearchNavbar/SearchNavbar";
import CardsContainer from "../CardPost/CardsContainer/CardsContainer";
import FilterForm from "./FilterNav/FilterForm";

function BuyHome(props) {

    // const apiUrl = "https://realestate-restapi-django3.herokuapp.com/api/re-post-list-pagination/?limit=40&offset=8";
    const limit = 8;
    const offset = 0;
    const apiUrl = `https://realestate-restapi-django3.herokuapp.com/api/re-post-list-pagination/?limit=${limit}`;

    return (
        <React.Fragment>
            <SearchNavbar></SearchNavbar>
            <Row>
                <Col>
                    <FilterForm/>
                </Col>
                <Col lg={8}>
                    <Container>
                        <CardsContainer apiUrl={apiUrl} limit={limit} offset={offset}/>
                    </Container>
                </Col>
                <Col></Col>
            </Row>
        </React.Fragment>
    );

}

export default BuyHome;
