import React from 'react';
import "./book.css";
import Wrapper from "./Wrapper/index";

function BookResult(props) {
    return (
        <Wrapper>
            {props.bookList.map(book => (
<div class="component">

<ul class="align">
    <li>
        <figure class='book'>

            {/* <!-- Front --> */}

            <ul class='hardcover_front'>
                <li>
                    <div class="coverDesign yellow">
                        <img alt="book" src={book.volumeInfo.imageLinks.thumbnail}></img>
                    </div>
                </li>
                <li></li>
            </ul>

            {/* <!-- Pages --> */}

            <ul class='page'>
                <li></li>
                <li>
                    <a target="blank" href={book.volumeInfo.infoLink}><button class="btn">Link</button></a>
                    <span></span>
                    <button class="btn" target="blank" id={book.id} onClick={(id) => props.handleSaveBooks(id)}>Save</button>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            {/* <!-- Back --> */}

            <ul class='hardcover_back'>
                <li></li>
                <li></li>
            </ul>
            <ul class='book_spine'>
                <li></li>
                <li></li>
            </ul>
            <figcaption>
                <h1>{book.volumeInfo.title}</h1>
                <span></span>
                <h5>Author: {book.volumeInfo.authors}</h5>
                <span></span>
                <div className="desc">{book.searchInfo.textSnippet}</div>
            </figcaption>
        </figure>
    </li>
    </ul>
</div>
           ) 
        )
        }
</Wrapper>

    );
}
export default BookResult;