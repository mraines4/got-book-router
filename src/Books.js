import React from 'react';
import { Link } from 'react-router-dom';

function Books({booksArray}) {
    console.log(booksArray);
    return (
        <div>
            <ul>
                
            </ul>
            {booksArray.map((book, i) => <li key={i} >
                <Link to={`/books/${i}`}>{book.name}</Link>
            </li>)}
        </div>
    )
}

export default Books;