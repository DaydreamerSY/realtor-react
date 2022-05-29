import {Button, Container, Form, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container className="">
                <div style={{height: 60 + 'em'}}></div>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <Form>
                        <FormGroup className="mb-3">
                            <Form.Label htmlFor="inputUsername">Email</Form.Label>
                            <Form.Control type="email" placeholder="Địa chỉ email"
                                          id="inputUsername"></Form.Control>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Label htmlFor="inputPassword">Mật khẩu</Form.Label>
                            <Form.Control type="password" id="inputPassword"></Form.Control>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Check type="checkbox" id="rememberLogin" label="Ghi nhớ đăng nhập"></Form.Check>
                        </FormGroup>
                        <Button variant="outline-primary" type="submit" className="w-100">
                            Đăng nhập
                        </Button>
                    </Form>
                </div>
            </Container>
        );
    }
}

export default SignIn;
