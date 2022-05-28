import PropTypes from 'prop-types';
import "./TitleCardContainer.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from 'react-bootstrap';
import CardsContainer from "../../CardPost/CardsContainer/CardsContainer";

function SectionRow(props) {

    const {sections, onTodoClick} = props;

    return (
        <Container className='mb-5'>

            <div className='mb-5'>
                {sections.map((title) => (
                    <Row className='mt-4'>
                        <div className='row-title'>{title.title}</div>
                        <a key={title.id} href={title.link}>View all recommended house in Bao Loc</a>
                        <CardsContainer apiUrl={title.apiUrl}/>
                    </Row>
                ))}
            </div>
        </Container>
    );
}

export default SectionRow;