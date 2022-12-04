import React from "react";

import Card from 'react-bootstrap/Card';

export class BookItems extends React.Component {
    render() {
        return (
            <Card>
                {/*Pirinting out the book title */}
                <Card.Header>{this.props.book.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* Printing the images to screen and author*/}
                        <img src={this.props.book.thumbnailUrl}></img>
                        <footer>
                            {this.props.book.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/' + this.props.books._id} className="btn btn-primary">Edit</Link>

            </Card>
            // <div>
            //     {/* <h3>{this.props.book.title}</h3>
            //     <img src={this.props.book.thumbnailUrl}></img>
            //     <h6>{this.props.book.authors[0]}</h6> */}
            // </div>
        )
    }
}