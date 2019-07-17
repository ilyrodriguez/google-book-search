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



    render(){
        return(
        <div className= "container-fluid">
            <Nav value={this.state.bookInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <BookResult bookList={this.state.books}/>
        </div>
        )
    }
}

export default Search;
