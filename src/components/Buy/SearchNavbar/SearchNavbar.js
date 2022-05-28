import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {ButtonGroup, FormControl, InputGroup, Nav, } from "react-bootstrap";

class SearchNavbar extends React.Component {

    render() {
        return (
            <div className="top-bar w-100 p-2 d-flex">


                <Nav variant="pills" defaultActiveKey="/buy">
                    <Nav variant="pills" defaultActiveKey="/buy">
                        <Nav.Item>
                        </Nav.Item>
                        <Nav.Item>
                            <InputGroup>
                                <InputGroup.Text id="btnSearch">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                                         className="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </InputGroup.Text>
                                <FormControl
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon"
                                />
                            </InputGroup>
                        </Nav.Item>

                    </Nav>
                </Nav>

            </div>


        );
    }
}

export default SearchNavbar;