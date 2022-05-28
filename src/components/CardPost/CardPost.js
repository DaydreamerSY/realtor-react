import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import './CardPost.scss';
import {Link, Navigate, useNavigate} from "react-router-dom";

function CardPost(props) {

    const {post} = props;
    const {id, title, description, area_by_m2, width_of_facade} = post;

    const apiUrl = "https://realestate-restapi-django3.herokuapp.com/api/re-post-detail/";
    const detailUrl = apiUrl + id + "/";


    return (
        <Col>
            <Card style={{width: 18 + `rem`}}>
                <div className="timer">3 mins ago</div>
                <Card.Img
                    src="https://cdn.eva.vn/upload/3-2021/images/2021-09-10/image3-1631239323-278-width600height350.jpg"
                    className="card-img-top"
                    alt="..."/>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <Row>
                        <Col><p> Diện tích <span>{area_by_m2} m<sup>2</sup></span></p></Col>
                        <Col><p> Mặt tiền <span>{width_of_facade} m<sup>2</sup></span></p></Col>
                        <Col><p>Pháp lý: <span>Sổ đỏ</span></p></Col>
                    </Row>
                    <Row>
                        <p className="card-text mb-2">Địa chỉ:<br/><i>Lộc Tiến, Bảo Lộc, Lâm Đồng</i></p>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button href={`/detail/${id}`}  variant="outline-primary">Xem thêm</Button>
                        </Col>
                        <Col className="text-center">
                            <Button variant="outline-success">Lưu</Button>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Lâm Đồng</Link>
                        <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Bảo Lộc</Link>
                        <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Sổ hồng</Link>
                        <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Lộc Tiến</Link>
                    </Row>
                </Card.Body>

            </Card>
        </Col>
    );
}

export default CardPost;