// import React from "react";

// import Card from 'react-bootstrap/Card';


import React from "react";
//Card BootStrap Import
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class BookItems extends React.Component {
   //Creating for deleting the book
    constructor() {
        super();
        // This Binds for the deletebook method
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    //Calls the delete with the books id
    DeleteBook(e) {
        e.preventDefault();
        // now returns the react single page application
        axios.delete('http://localhost:4000/api/book/' + this.props.book.isbn)
            .then((res) => { this.props.Reload(); })
            .catch();
    }

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
                <Link to={'/edit/' + this.props.book.isbn} className="btn btn-primary">Edit</Link>
                 {/*This Deletes The Book and reloads page */}
                 <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>

            </Card>
            // <div>
            //     {/* <h3>{this.props.book.title}</h3>
            //     <img src={this.props.book.thumbnailUrl}></img>
            //     <h6>{this.props.book.authors[0]}</h6> */}
            // </div>
        )
    }
}