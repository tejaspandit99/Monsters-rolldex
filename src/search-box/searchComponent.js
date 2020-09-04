import React from "react";
 import "./search-box.styles.css";
const SearchModify = ({placeholder,handleChange}) => (
 
<input type="search"  
className ="search"
placeholder={placeholder}
onChange={handleChange}></input>

);

export default SearchModify;