import React from "react";

export class Create extends React.Component {
    constructor() {
        //calling the super
        super();

        //Bind to Event
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        //Set Value Empty
        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }

    //Button to submit
    handleSubmit(e) {
        e.preventDefault();

        //Printing to the console
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);

        //Reset to blank
        this.setState = {
            title: '',
            cover: '',
            author: ''
        }
    }

    //Change Title
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    //Change Cover
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    //Change Author
    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    render() {
        return (
            <div>
                {/* Print to screen */}
                <h3>Hello from my Create Component!</h3>

                {/* Setting Up To Add Book to Array */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeBookTitle} />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text" className="form-control" value={this.state.cover} onChange={this.onChangeBookCover} />
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text" className="form-control" value={this.state.author} onChange={this.onChangeBookAuthor} />
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        )
    }
}