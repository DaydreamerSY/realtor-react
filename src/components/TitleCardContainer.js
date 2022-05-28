import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from 'react-bootstrap';
import '../scss/TitleCardContainer.scss';
import CardPost from './CardPost';
import async from "async";
import CardsContainer from "./CardsContainer";

TitleCardContainer.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
}

TitleCardContainer.defaultProps = {
    todos: [],
    onTodoClick: null,
}


function TitleCardContainer(props) {

    const {todos, onTodoClick} = props;
    // const [postList, setPostList] = useState([]);

    // useEffect(() => {
    //     async function fetchPostList() {
    //         try {
    //             const requestUrl = "https://realestate-restapi-django3.herokuapp.com/api/re-post-list-pagination/?limit=4&offset=8";
    //             const response = await fetch(requestUrl);
    //             const responseJson = await response.json();
    //
    //             const {data} = responseJson;
    //             setPostList(data);
    //         } catch (e) {
    //             console.log(e.message);
    //         }
    //
    //     }
    //
    //     fetchPostList();
    // }, [])

    return (
        <Container className='mb-5'>

            <div className='mb-5'>
                {todos.map((title) => (
                    <Row className='mt-4'>
                        <div className='row-title'>{title.title}</div>
                        <a key={title.id} href={title.link}>View all recommended house in Bao Loc</a>
                        <CardsContainer apiUrl={title.apiUrl}/>
                        {/*<CardPost></CardPost>*/}
                    </Row>
                ))}
            </div>
        </Container>
    );
}

export default TitleCardContainer;