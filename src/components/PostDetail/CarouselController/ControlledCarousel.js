import {Carousel} from "react-bootstrap";
import {useState} from "react";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
// https://cdn.eva.vn/upload/3-2021/images/2021-09-10/image3-1631239323-278-width600height350.jpg
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.eva.vn/upload/3-2021/images/2021-09-10/image3-1631239323-278-width600height350.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.eva.vn/upload/3-2021/images/2021-09-10/image3-1631239323-278-width600height350.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.eva.vn/upload/3-2021/images/2021-09-10/image3-1631239323-278-width600height350.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;