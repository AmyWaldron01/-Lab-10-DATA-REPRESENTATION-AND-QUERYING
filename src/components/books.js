import React from "react";

//importing book items
import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render() {
        // return (
        //     <div>
        //         <h3>Hello From Boooks</h3>
        //         {/* using the array */}
        //         {console.log(this.props.books)}
        //         <BookItems></BookItems>
        //     </div>
        // );
       
        //taking an array and splitting it
        return this.props.books.map(
           //excuting this on each element
            (book)=>{
                return <BookItems book = {book} key={book.isbn}></BookItems>
            }
        );
    }
}
//line 11 is using the array {console.log(this.props.books)}