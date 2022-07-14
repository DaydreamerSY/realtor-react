import {Col, Container, Row} from "react-bootstrap";
import "./BuyHome.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import SearchNavbar from "./SearchNavbar/SearchNavbar";
import CardsContainer from "../CardPost/CardsContainer/CardsContainer";
import FilterForm from "./FilterNav/FilterForm";

function BuyHome(props) {

    // const apiUrl = "https://realestate-restapi-django3.herokuapp.com/api/re-post-list-pagination/?limit=40&offset=8";
    const limit = 16;
    const offset = 0;
    const apiUrl = "http://127.0.0.1:8000/api/re-post2-list-create/";
    const has_pagination = true;

    const [filters, setFilters] = useState({
        min_price: "",
        max_price: "",
        min_area: "",
        max_area: "",
        min_mattien: "",
        max_mattien: "",
        min_duongvao: "",
        max_duongvao: "",
        min_bedroom: "",
        max_bedroom: "",
        min_toilet: "",
        max_toilet: "",
        region: "",
        huong_nha: "",
        phap_ly: "",
        limit: limit,
        offset: 0
    })

    return (
        <React.Fragment>
            <SearchNavbar></SearchNavbar>
            <Row>
                <Col>
                    <FilterForm/>
                </Col>
                <Col lg={8}>
                    <Container>
                        <CardsContainer apiUrl={apiUrl} limit={limit} offset={offset} has_pagination={has_pagination}/>
                    </Container>
                </Col>
                <Col></Col>

            </Row>

        </React.Fragment>
    );

}

export default BuyHome;
