import React from 'react';
import {Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

function ErrorPage() {
    return <Container>
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1>Error</h1>
            <h5>Page not found!</h5>
            <Link to="/home">Click here to go to Home</Link>
        </div>
    </Container>
}

export default ErrorPage;
