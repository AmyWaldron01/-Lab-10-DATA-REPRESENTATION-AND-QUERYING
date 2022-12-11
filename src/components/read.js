import React from "react";
//Import Axios
import axios from "axios";

//Import Books
import { Books } from "./books";

//NOW USING API INSTEAD 
export class Read extends React.Component {
    constructor() {
        super();
        this.Reload = this.Reload.bind(this);
    }

    Reload() {
        this.componentDidMount();
    }




    componentDidMount() {
        //HTTP Request
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
            //When Request Completed
            .then(
                //Function
                (response) => {
                    // Updating the State
                    this.setState({ books: response.data })
                }
            )
            //If Request returns error
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }

    //Object that will hold all data for class
    state = {
        //Assigning Data to The Array
        books: []
    }

    //must rertun jss code
    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                {/*Displaying the new data for reload*/}
                <Books books={this.state.books} Reload={this.Reload} ></Books>
            </div>
        );
    }
}