import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Col, Container, FloatingLabel, Form, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap";
import IconArea from "../Icons/IconArea";
import IconWidthFacade from "../Icons/IconWidthFacade";
import IconDirection from "../Icons/IconDirection";
import IconCash from "../Icons/IconCash";
import IconWidthRoad from "../Icons/IconWidthRoad";

function CreatePost(props) {

    const [formattedCash, setFormattedCash] = useState("");

    function handleChange(event) {
        setFormattedCash(parseInt(event.target.value).toLocaleString());
    }

    return (
        <Container className="mb-5">
            <Row className="mt-5">
                <Col lg={8}>
                    <Form>
                        <FormGroup className="mb-3">
                            <Form.Label htmlFor="inputMultipleImages">Chọn ảnh</Form.Label>
                            <Form.Control type="file" id="inputMultipleImages" multiple="multiple"/>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Label htmlFor="inputTitle" className="fs-4">Tiêu đề</Form.Label>
                            <FloatingLabel
                                controlId="inputTitle"
                                label="Tiêu đề bài đăng"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com"/>
                            </FloatingLabel>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Label htmlFor="inputDescription" className="fs-4">Mô tả</Form.Label>
                            <FloatingLabel controlId="inputDescription" label="Mô tả ngắn về BĐS">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{height: '100px'}}
                                />
                            </FloatingLabel>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Form.Label htmlFor="inputTitle" className="fs-4">Đặc điểm</Form.Label>
                                <Col lg={6}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><IconArea/></InputGroup.Text>
                                        <FormControl
                                            placeholder=""
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text>m<sup>2</sup></InputGroup.Text>
                                        {/*<FormControl disabled aria-label="Last name" />*/}
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><IconWidthFacade/></InputGroup.Text>
                                        <FormControl
                                            placeholder=""
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text>m<sup>2</sup></InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><IconDirection/></InputGroup.Text>
                                        <select className="form-select" aria-label="Chọn hướng nhà">
                                            <option defaultValue>Chọn hướng nhà</option>
                                            <option value="North">Bắc</option>
                                            <option value="East North">Đông Bắc</option>
                                            <option value="East">Đông</option>
                                            <option value="South East">Đông Nam</option>
                                            <option value="South">Nam</option>
                                            <option value="Soutwest">Tây Nam</option>
                                            <option value="West">Tây</option>
                                            <option value="Northwest">Tây Bắc</option>
                                        </select>
                                    </InputGroup>
                                </Col>
                                <Col lg={6}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><IconCash/></InputGroup.Text>
                                        <FormControl
                                            placeholder=""
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onInput={handleChange}
                                        />
                                        <FormControl disabled aria-label="converted" placeholder={formattedCash}/>
                                        <InputGroup.Text>vnđ</InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><IconWidthRoad/></InputGroup.Text>
                                        <FormControl
                                            placeholder=""
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text>m<sup>2</sup></InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><IconDirection/></InputGroup.Text>
                                        <select className="form-select" aria-label="Chọn loại giấy tờ">
                                            <option defaultValue>Chọn loại giấy tờ</option>
                                            <option value="1">Sổ đỏ/hồng</option>
                                            <option value="2">Giấy tờ tay</option>
                                        </select>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Form.Check type="checkbox" id="checkboxAgreements"
                                        label="Tôi đã đọc và chập nhận các điều khoản sử dụng"/>
                            <Button variant="outline-primary" type="submit" className="w-100">
                                Đăng tin
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CreatePost;