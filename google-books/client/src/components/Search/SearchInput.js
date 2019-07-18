import React from "react";
import "./style.css";


function SearchInput(props) {
  return (
    <form className="input-group input-group-lg" onSubmit={props.handleSubmit}>
      <input className="form-control" type="text" placeholder="Search by Book Title" value= {props.value} onChange={props.handleChange} />
     <input id='submit-btn' type="submit" /> 
    </form>
  );
}


export default SearchInput;