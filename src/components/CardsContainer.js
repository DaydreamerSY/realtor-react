import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CardPost from "./CardPost";
import {Col, Row} from "react-bootstrap";

CardsContainer.propTypes = {
    apiUrl: PropTypes.string,
    limit: PropTypes.number,
    page: PropTypes.number
};

CardsContainer.defaultProps = {
    apiUrl: '',
    limit: 1,
    page: 1,
}

function CardsContainer(props) {

    const {apiUrl, limit, page} = props;
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPostList() {
            try {
                const requestUrl = apiUrl;
                const headers = {
                    "Content-type": "application/json",
                    // "X-CSRFToken": csrftoken,
                };
                const response = await fetch(requestUrl, {headers: headers});
                const responseJson = await response.json();
                const {results} = responseJson;
                setPostList(results);
            } catch (e) {
                console.log(e.message);
            }

        }

        fetchPostList();
    }, [])


    return (
        <Row>
            {postList.map((post) => (
                <Col> <CardPost post={post}/> </Col>
            ))}
        </Row>
    );
}

export default CardsContainer;