import {Button, Container, Form, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

function SignUp() {

    return (
        <Container>
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
                        <Form.Label htmlFor="inputRePassword">Nhập lại mật khẩu</Form.Label>
                        <Form.Control type="password" id="inputRePassword"></Form.Control>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Form.Label htmlFor="inputNumberPhone">Số điện thoại</Form.Label>
                        <Form.Control type="text" id="inputNumberPhone"></Form.Control>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Form.Check type="checkbox" id="rememberLogin"
                                    label="Tôi đã đọc và chập nhận các điều khoản sử dụng"></Form.Check>
                    </FormGroup>
                    <Button variant="outline-primary" type="submit" className="w-100">
                        Đăng nhập
                    </Button>
                </Form>
            </div>
        </Container>
    );

}

export default SignUp;
