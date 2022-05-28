import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './NavbarRealtor.scss';
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../Error/ErrorPage";
import Home from "../HomePage/Home";
import BuyHome from "../Buy/BuyHome";

class NavbarRealtor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isFavoriteHovered: false}

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        this.setState({
            isFavoriteHovered: true
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            isFavoriteHovered: false
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="top-bar w-100">
                    <Navbar bg="light" expand="lg">
                        <Container className="fw-bold">
                            <Navbar.Brand href="/home">DACNNT2</Navbar.Brand>
                            <Navbar.Toggle aria-controls="sell-nav-dropdown"/>
                            <Navbar.Toggle aria-controls="rent-nav-dropdown"/>
                            <Navbar.Toggle aria-controls="mews-nav-dropdown"/>
                            <Navbar.Toggle aria-controls="contacts-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="Bán" id="sell-nav-dropdown"
                                                 className="hover-underline-animation" href="#Bán">
                                        <NavDropdown.Item href="/buy">Bán căn hộ</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Bán nhà riêng</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Bán nhà biệt thự</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Bán kho/xưởng</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Cho thuê" id="rent-nav-dropdown"
                                                 className="hover-underline-animation" href="#Bán">
                                        <NavDropdown.Item href="#action/3.1">Cho thuê căn hộ</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Cho thuê nhà riêng</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Cho thuê nhà biệt thự</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Cho thuê kho/xưởng</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Tin tức" id="news-nav-dropdown"
                                                 className="hover-underline-animation" href="#Bán">
                                        <NavDropdown.Item href="#action/3.1">Tin thị trường</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Chính sách - quản lý</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Tư vấn luật</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Lời khuyên</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Danh bạ" id="contacts-nav-dropdown"
                                                 className="hover-underline-animation" href="#dropdown">
                                        <NavDropdown.Item href="#action/3.1">Nhà môi giới</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Doanh nghiệp</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav className="justify-content-end">
                                    <Nav.Link onMouseEnter={this.onMouseEnterHandler}
                                              onMouseLeave={this.onMouseLeaveHandler}>
                                        {this.state.isFavoriteHovered ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="#fa2062"
                                                 class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path fillRule='red'
                                                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg>
                                        }
                                    </Nav.Link>
                                    <Nav.Link className="hover-underline-animation" href="/signin" to="/signin">Đăng nhập</Nav.Link>
                                    <Nav.Link className="hover-underline-animation" href="/signup">Đăng ký</Nav.Link>
                                    <Button variant="outline-danger float-end">Đăng tin</Button>
                                </Nav>
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path="/home" element={ <Home/> }></Route>
                    <Route path="/buy" element={ <BuyHome/> }></Route>
                    <Route exact path="/signin" element={ <SignIn/>}></Route>
                    <Route exact path="/signup" element={ <SignUp/>}></Route>
                    {/*-----------------------------------------------*/}
                    <Route path="*" element={ <ErrorPage/> }></Route>
                </Routes>
            </BrowserRouter>

        );
    }

}

export default NavbarRealtor;