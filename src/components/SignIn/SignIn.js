import {Button, Container, Form, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleOnUsernameChange(event) {
        setUsername(event.target.value);
        console.log(username);
    }

    function handleOnPasswordChange(event) {
        setPassword(event.target.value);
        console.log(password);
    }

    function handleOnSubmit(event) {
        event.preventDefault();

        const formValue = {username: username, password: password};
        console.log(formValue)
    }

    return (
        <Container className="">
            <div style={{height: 60 + 'em'}}></div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <Form onSubmit={handleOnSubmit}>
                    <FormGroup className="mb-3">
                        <Form.Label htmlFor="inputUsername">Email</Form.Label>
                        <Form.Control type="email" placeholder="Địa chỉ email"
                                      id="inputUsername" onChange={handleOnUsernameChange}></Form.Control>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Form.Label htmlFor="inputPassword">Mật khẩu</Form.Label>
                        <Form.Control type="password" id="inputPassword"
                                      onChange={handleOnPasswordChange}></Form.Control>
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

export default SignIn;
