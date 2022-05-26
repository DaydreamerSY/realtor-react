import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from 'react-bootstrap';
import '../scss/Cards.scss';
import CardPost from "./CardPost";

class CardRowContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardPost></CardPost>
        );
    }

}

export default CardRowContainer;

