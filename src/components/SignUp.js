import {Button, Container, Form, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Container>
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
                                <Form.Label htmlFor="inputRePassword">Nhập lại mật khẩu</Form.Label>
                                <Form.Control type="password" id="inputRePassword"></Form.Control>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label htmlFor="inputNumberPhone">Số điện thoại</Form.Label>
                                <Form.Control type="text" id="inputNumberPhone"></Form.Control>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Check type="checkbox" id="rememberLogin" label="Tôi đã đọc và"></Form.Check>
                            </FormGroup>
                            <Button variant="outline-primary" type="submit" className="w-100">
                                Đăng nhập
                            </Button>
                        </Form>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default SignUp;
