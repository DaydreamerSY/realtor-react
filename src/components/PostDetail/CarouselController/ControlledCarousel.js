import {Carousel} from "react-bootstrap";
import {useState} from "react";

function convertImg(imgs) {
    var img_urls = [];

    try {
        for (const [key, value] of Object.entries(imgs)) {
            if (key === "id") continue;
            try {
                if (imgs[key].includes("https%3A")) {
                    let img_new_url = imgs[key].replace("/real_estate/media/", "");
                    img_new_url = img_new_url.replace("https%3A", "https:");
                    img_urls.push(img_new_url);
                } else {
                    img_urls.push(imgs[key]);
                }
            } catch (e) {
                // img_urls.push("https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg");
            }
        }
    } catch (e) {
        img_urls.push("https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg")
    }

    return img_urls;
}

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
    const {imgs} = props;
    // console.log(imgs)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // console.log("img in caro...",convertImg(imgs));
// https://cdn.eva.vn/upload/3-2021/images/2021-09-10/image3-1631239323-278-width600height350.jpg
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            {convertImg(imgs).map(url => (
                <Carousel.Item>
                <img
                    style={{height: 500 + 'px'}}
                    className="d-block w-100"
                    src={url}
                    // alt="First slide"
                />
                <Carousel.Caption>
                    {/*<h3>First slide label</h3>*/}
                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
            ))}


            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="https://file4.batdongsan.com.vn/resize/745x510/2022/06/25/20220625121715-dae4_wm.jpg"*/}
            {/*        alt="Second slide"*/}
            {/*    />*/}
            {/*    <Carousel.Caption>*/}
            {/*        <h3>Second slide label</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}

            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="https://file4.batdongsan.com.vn/resize/745x510/2022/06/25/20220625121715-dae4_wm.jpg"*/}
            {/*        alt="Third slide"*/}
            {/*    />*/}
            {/*    <Carousel.Caption>*/}
            {/*        <h3>Third slide label</h3>*/}
            {/*        <p>*/}
            {/*            Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
            {/*        </p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}

            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="https://file4.batdongsan.com.vn/resize/745x510/2022/06/25/20220625121855-4472_wm.jpg"*/}
            {/*        alt="Forth Slide"*/}
            {/*    />*/}
            {/*    <Carousel.Caption>*/}
            {/*        <h3>Forth slide label</h3>*/}
            {/*        <p>*/}
            {/*            Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
            {/*        </p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}

        </Carousel>
    );
}

export default ControlledCarousel;