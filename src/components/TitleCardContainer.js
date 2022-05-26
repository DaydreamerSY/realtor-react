import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from 'react-bootstrap';
import '../scss/TitleCardContainer.scss';
import CardPost from './CardPost';

class TitleCardContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='mb-5'>

                <div className='mb-5'>
                    {this.props.recommendTitles.map((title) => (
                        <Row className='mt-4'>
                            <div className='row-title'>{title.title}</div>
                            <a href={title.link}>View all recommended house in Bao Loc</a>
                            {/* <CardPost></CardPost> */}
                        </Row>
                    ))}
                </div>
            </Container>
        );
    }

}

export default TitleCardContainer;