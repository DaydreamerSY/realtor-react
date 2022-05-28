import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";
import ControlledCarousel from "./CarouselController/ControlledCarousel";
import './PostDetail.scss';
import IconArea from "../Icons/IconArea";
import IconWidthFacade from "../Icons/IconWidthFacade";
import IconDirection from "../Icons/IconDirection";
import IconCash from "../Icons/IconCash";
import IconWidthRoad from "../Icons/IconWidthRoad";
import IconLegal from "../Icons/IconLegal";
import IconFlag from "../Icons/IconFlag";


function PostDetail(props) {

    // const [data, setData] = useState();
    const params = useParams();
    const apiUrl = `https://realestate-restapi-django3.herokuapp.com/api/re-post-detail/${params.postid}/`

    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchDetails() {
            try {
                const requestUrl = apiUrl;
                const headers = {
                    "Content-type": "application/json", // "X-CSRFToken": csrftoken,
                };
                const response = await fetch(requestUrl, {headers: headers});
                const responseJson = await response.json();
                console.log(responseJson);
                setData(responseJson);

            } catch (e) {

            }
        }

        fetchDetails();
    }, [])


    return (<Container>
            <div className="top-row mb-2">
                this is post #{params.postid}
            </div>
            <Row className="g-5 mb-5">
                <Col lg={9} md={9}>
                    <ControlledCarousel/>
                    <article className="blog-post">

                        {/*Tiêu đề bài đăng*/}
                        <h2 className="blog-post-title">{data.title}</h2>
                        <p className="blog-post-meta">{data.created_at} bởi {data.created_by}</p>
                        <p>{data.description}</p>

                        <hr/>
                        {/*Thông tin số liệu*/}
                        <h4>Thông tin số liệu</h4>
                        <p>This is an example blockquote in action:</p>
                        <hr/>
                        {/*Thông tin mô tả*/}
                        <h4>Thông tin mô tả</h4>
                        <p>Tiêu đề mô tả</p>
                        <ul>
                            <li>DT 200m<sup>2</sup> giá 10,000 vnđ</li>
                            <li>2 lầu</li>
                            <li>liên hệ: 0919xxxxxx</li>
                        </ul>

                        <hr/>

                        {/*Đặc điểm BDS*/}
                        <h4>Đặc điểm bất động sản</h4>
                        <Row className="table-info">
                            <Row>
                                <Col lg={6}>

                                    <Row>
                                        <div className="icon col-1 text-center">
                                            <IconArea/>
                                        </div>
                                        <Col lg={6} className="fw-bolder">Diện tích</Col>
                                        <Col lg={5} className="text-start">{data.area_by_m2}m<sup>2</sup></Col>
                                    </Row>

                                    <Row>
                                        <div className="icon col-1 text-center">
                                            <IconWidthFacade/>
                                        </div>
                                        <Col lg={6} className="fw-bolder">Mặt tiền</Col>
                                        <Col lg={5} className="text-start">{data.width_of_facade}m<sup>2</sup></Col>
                                    </Row>

                                    <Row>
                                        <div className="icon col-1 text-center">
                                            <IconDirection/>
                                        </div>
                                        <Col lg={6} className="fw-bolder">Hướng nhà</Col>
                                        <Col lg={5} className="text-start">{data.direction}</Col>
                                    </Row>

                                </Col>

                                <Col lg={6}>

                                    <Row>
                                        <div className="icon col-1 text-center">
                                            <IconCash/>
                                        </div>
                                        <Col lg={6} className="fw-bolder">Giá</Col>
                                        <Col lg={5} className="text-start">{data.price}</Col>
                                    </Row>

                                    <Row>
                                        <div className="icon col-1 text-center">
                                            <IconWidthRoad/>
                                        </div>
                                        <Col lg={6} className="fw-bolder">>Đường vào</Col>
                                        <Col lg={5} className="text-start">{data.width_of_road}m<sup>2</sup></Col>
                                    </Row>

                                    <Row>
                                        <div className="icon col-1 text-center">
                                            <IconLegal/>
                                        </div>
                                        <Col lg={6} className="fw-bolder">Pháp lý</Col>
                                        <Col lg={5} className="text-start">
                                            {data.is_legal ? "Sổ đỏ/hồng" : "Giấy tay"}
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Row>

                        <hr/>
                        {/*Xem trên bản đồ*/}
                        <h4>Xem trên bản đồ</h4>
                        <p>Thêm api google map vào đây</p>

                        <hr/>
                        {/*Thông tin bài post*/}
                        <Row>
                            <Col lg={3}>Ngày đăng</Col>
                            <Col lg={3}>Ngày hết hạn</Col>
                            <Col lg={3}>Loại tin</Col>
                            <Col lg={3}>Mã tin</Col>
                        </Row>
                        <Row>
                            <Col lg={3} className="fw-bolder">28/04/2022</Col>
                            <Col lg={3} className="fw-bolder">28/04/2022</Col>
                            <Col lg={3} className="fw-bolder">Tin thường</Col>
                            <Col lg={3} className="fw-bolder">00000000</Col>
                        </Row>
                        <Row className="mt-2">
                            <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Lâm Đồng</Link>
                            <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Bảo Lộc</Link>
                            <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Sổ hồng</Link>
                            <Link to="#" className="tag-address text-decoration-none ms-1 me-1 mt-1">Lộc Tiến</Link>
                        </Row>
                        <Button variant="outline-danger mt-5">
                            <IconFlag/>
                            <span className="ms-3">Báo cáo bài đăng</span>
                        </Button>
                    </article>
                </Col>
            </Row>
        </Container>);
}

export default PostDetail;