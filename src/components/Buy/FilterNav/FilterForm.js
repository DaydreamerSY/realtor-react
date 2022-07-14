import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Row} from "react-bootstrap";
import Slider from "@material-ui/core/Slider";
import IconArea from "../../Icons/IconArea";
import IconWidthFacade from "../../Icons/IconWidthFacade";
import IconDirection from "../../Icons/IconDirection";
import IconCash from "../../Icons/IconCash";
import IconWidthRoad from "../../Icons/IconWidthRoad";
import IconLegal from "../../Icons/IconLegal";

function FilterForm(props) {

    const [price, setPrice] = useState([500000000, 50000000000]);
    const [convertedPrice, setConvertedPrice] = useState(["500,000,000", "50,000,000,000"])

    const [areaByM2, setAreaByM2] = useState([50, 200]);
    const [facade, setFacade] = useState([5, 20]);
    const [widthRoad, setWidthRoad] = useState([5, 20]);

    const handleOnPriceChange = (event, newValue) => {
        setPrice(newValue);
        setConvertedPrice([newValue[0].toLocaleString(), newValue[1].toLocaleString()])
    };

    const handleOnAreaChange = (event, newValue) => {
        setAreaByM2(newValue);
    }

    const handleOnFacadeChange = (event, newValue) => {
        setFacade(newValue);
    }

    const handleOnWidthRoadChange = (event, newValue) => {
        setWidthRoad(newValue);
    }

    function handleChange(event) {
        event.preventDefault();
    }

    return (
        <Container>
            {/*Area*/}
            <Row className="mt-2">
                <Form className="mb-3">
                    <FormGroup>
                        <Form.Label htmlFor=""><IconArea/> Diện tích </Form.Label>
                        <Slider
                            min={50}
                            max={200}
                            step={5}
                            value={areaByM2}
                            onChange={handleOnAreaChange}
                            // valueLabelDisplay="auto"
                        />
                        <Form.Text>{areaByM2[0]} m<sup>2</sup> tới {areaByM2[1]} m<sup>2</sup> </Form.Text>
                    </FormGroup>
                </Form>
                <hr/>
            </Row>
            {/*Price*/}
            <Row className="mt-2">
                <Form className="mb-3">
                    <FormGroup>
                        <Form.Label htmlFor=""><IconCash/> Giá</Form.Label>
                        <Slider
                            min={500000000}
                            max={50000000000}
                            step={100000000}
                            value={price}
                            onChange={handleOnPriceChange}
                            // valueLabelDisplay="auto"
                        />
                        <Form.Text>{convertedPrice[0]} tới {convertedPrice[1]}</Form.Text>
                    </FormGroup>
                </Form>
                <hr/>
            </Row>
            {/*Facade*/}
            <Row className="mt-2">
                <Form className="mb-3">
                    <FormGroup>
                        <Form.Label htmlFor=""><IconWidthFacade/> Mặt tiền</Form.Label>
                        <Slider
                            min={5}
                            max={20}
                            step={5}
                            value={facade}
                            onChange={handleOnFacadeChange}
                            // valueLabelDisplay="auto"
                        />
                        <Form.Text>{facade[0]} m tới {facade[1]} m</Form.Text>
                    </FormGroup>
                </Form>
                <hr/>
            </Row>
            {/*WidthRoad*/}
            <Row className="mt-2">
                <Form className="mb-3">
                    <FormGroup>
                        <Form.Label htmlFor=""><IconWidthRoad/> Bề ngang đường vào</Form.Label>
                        <Slider
                            min={5}
                            max={20}
                            step={5}
                            value={widthRoad}
                            onChange={handleOnWidthRoadChange}
                            // valueLabelDisplay="auto"
                        />
                        <Form.Text>{widthRoad[0]} m tới {widthRoad[1]} m</Form.Text>
                    </FormGroup>
                </Form>
                <hr/>
            </Row>
            {/*Direction*/}
            <Row className="mt-2">
                <Form className="mb-3">
                    <FormGroup>
                        <Form.Label><IconDirection/> Hướng nhà</Form.Label>
                        <Form.Check type="checkbox" id="checkboxNorth" label="Bắc"/>
                        <Form.Check type="checkbox" id="checkboxEastNorth" label="Đông Bắc"/>
                        <Form.Check type="checkbox" id="checkboxEast" label="Đông"/>
                        <Form.Check type="checkbox" id="checkboxSouthEast" label="Đông Nam"/>
                        <Form.Check type="checkbox" id="checkboxSouth" label="Nam"/>
                        <Form.Check type="checkbox" id="checkboxSoutwest" label="Tây Nam"/>
                        <Form.Check type="checkbox" id="checkboxWest" label="Tây"/>
                        <Form.Check type="checkbox" id="checkboxNorthwest" label="Tây Bắc"/>
                    </FormGroup>
                </Form>
                <hr/>
            </Row>
            {/*Legal*/}
            <Row className="mt-2">
                <Form className="mb-3">
                    <FormGroup>
                        <Form.Label><IconLegal/> Hợp pháp</Form.Label>
                        <Form.Check type="checkbox" id="checkboxLegal" label="Sổ đỏ/ Sổ hồng"/>
                        <Form.Check type="checkbox" id="checkboxNoneLegal" label="Khác"/>
                    </FormGroup>
                </Form>
                <hr/>
            </Row>
            <Button variant="outline-primary" type="submit" className="w-100">
                Áp dụng
            </Button>
        </Container>
    );
}

export default FilterForm;