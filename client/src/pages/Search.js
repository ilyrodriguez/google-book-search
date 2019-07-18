import React from 'react';
// import Result-container from "../components/Result-container";
import API from "../utils/Api";
// import SearchInput from "../components/Search/SearchInput";
import BookResult from "../components/BookResult";
import Nav from "../components/Nav/Nav";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            books: [],
            title: "",
            author: "",
            synopsis: ""
        }
    }

    componentDidMount(){
        // this.loadBooks();
    }

    loadBooks = () =>{
        API.searchBooks(this.state.bookInput)
        .then(res =>
          this.setState({ books: res.data.items, title: "", author: "", synopsis: "" })
        )
        .catch(err => console.log(err));
    };       
  

    handleChange = (e) => {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.loadBooks();
    }

    handleSaveBooks= (e) => {
        console.log("Click");
        e.preventDefault();
        console.log(this.state.bookInput) 
        let bookData = this.state.books.filter(book => book.id === e.target.id)
        bookData = bookData[0];
        console.log(bookData);

        API.addBookToDB({
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.infoLink
            })
            .then(this.setState({ message: alert("book saved") }))
            .catch(err => console.log(err))
    }

    render(){
        return(
        <div className= "container-fluid">
            <Nav value={this.state.bookInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <BookResult bookList={this.state.books} handleSaveBooks={this.handleSaveBooks}/>
        </div>
        )
    }
}

export default Search;
