import React from 'react';
import Axios from 'axios';

function Book({match, name, pages, isbn}) {
    // console.log(match.params.book);
    // console.log(Object.values(booksArray[match.params.book]));
    // console.log(booksArray[match.params.book]);
    // const bookDetails = booksArray[match.params.book];
    return (
        <div>           
            <h1>Name: {name}</h1>
            <h3>Number of pages: {pages}</h3>
            <h3>ISBN: {isbn}</h3>
            {/* <ul>
                Characters: {bookDetails.characters.map(char => <li>{char}</li>)}
            </ul> */}
        </div>
    )
}

export default Book;