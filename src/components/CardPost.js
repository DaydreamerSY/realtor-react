import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {} from 'react-bootstrap';
import '../scss/Cards.scss';

class CardPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {

        let headers = new Headers();

        // headers.append("Access-Control-Allow-Origin", "*");
        // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        fetch("https://realestate-restapi-django3.herokuapp.com/api/re-post-list/", {
        // fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            // headers: headers
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // componentDidMount() {
    //     fetch(
    //         "https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json,
    //                 DataisLoaded: true
    //             });
    //         })
    // }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default CardPost;
// fetch("https://realestate-restapi-django5.herokuapp.com/api/re-post-list/?format=json")
