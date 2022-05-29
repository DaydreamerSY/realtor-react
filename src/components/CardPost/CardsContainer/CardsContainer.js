import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CardPost from "../CardPost";
import {Col, Row} from "react-bootstrap";

CardsContainer.propTypes = {
    apiUrl: PropTypes.string,
    limit: PropTypes.number,
    offset: PropTypes.number,
};

CardsContainer.defaultProps = {
    apiUrl: '',
    limit: 1,
    offset: 0,
}

function CardsContainer(props) {

    const {apiUrl, limit, offset} = props;
    const [postList, setPostList] = useState([]);

    // console.log(limit);
    // console.log(offset);

    let apiUrlwithOffset = "";

    if (offset !== 0 ) {
        console.log(offset);
        apiUrlwithOffset = apiUrl + `&offset=${offset}`;
    }

    useEffect(() => {
        async function fetchPostList() {
            try {
                let requestUrl = ""
                if (apiUrlwithOffset !== "") {
                    requestUrl = apiUrlwithOffset;
                } else {
                    requestUrl = apiUrl
                }
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
                <Col lg={3} key={post.id}> <CardPost post={post}/> </Col>
            ))}
        </Row>
    );
}

export default CardsContainer;