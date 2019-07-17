// import React, {Component} from "react";
// import API from "../utils/Api";
// import NavSaved from "../components/Nav/NavSaved"
// import Wrapper from "./Wrapper/index"
// import SavedBookResult from "../components/BookResult"
// import "./book.css";

// class BookSaved extends Component {
//     state = {
//         BookSaved: []
//     };

//     componentDidMount() {
//         API.getBooks()
//             .then(res => this.setState({ BookSaved: res.data }))
//             .catch(err => console.log(err))
//     }

//     handleDeleteButton = id => {
//         API.deleteBook(id)
//             .then(res => this.componentDidMount())
//             .catch(err => console.log(err))
//     }

// render(props) {
//         return(
//             <div className="container-fluid">
//             <NavSaved />
//             <Wrapper>
//             {props.bookList.map(book => (
// <div class="component">

// <ul class="align">
//     <li>
//         <figure class='book'>

//             {/* <!-- Front --> */}

//             <ul class='hardcover_front'>
//                 <li>
//                     <div class="coverDesign yellow">
//                         <img alt="book" src={book.volumeInfo.imageLinks.thumbnail}></img>
//                     </div>
//                 </li>
//                 <li></li>
//             </ul>

//             {/* <!-- Pages --> */}

//             <ul class='page'>
//                 <li></li>
//                 <li>
//                     <a class="btn" target="blank" href={book.volumeInfo.infoLink}>Link</a>
//                     <span></span>
//                     <button class="btn" target="blank" id={book.id} onClick={(id) => this.handleSaveBooks(id)}>Save</button>
//                 </li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>

//             {/* <!-- Back --> */}

//             <ul class='hardcover_back'>
//                 <li></li>
//                 <li></li>
//             </ul>
//             <ul class='book_spine'>
//                 <li></li>
//                 <li></li>
//             </ul>
//             <figcaption>
//                 <h1>{book.volumeInfo.title}</h1>
//                 <span></span>
//                 <h5>{book.volumeInfo.authors}</h5>
//                 <span></span>
//                 <p>{book.volumeInfo.description}</p>
//             </figcaption>
//         </figure>
//     </li>
//     </ul>
// </div>
//            ) 
//         )
//         }
// </Wrapper>
// </div>
//         )
//         }
    



// export default BookSaved;