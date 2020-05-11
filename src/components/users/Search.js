import React, { useState } from 'react';
import propTypes from 'prop-types';
const Search = ({ searchUser, clearUser, showClear, setAlert }) => {
    const [text, changeText] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if (text === "") {
            setAlert("please enter some text", "light");
        }
        else {
            searchUser(text);
            changeText("");
        }
    }
    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <input type="text" value={text} onChange={(e) => changeText(e.target.value)} name="text" placeholder="Search User" />
                <li className="lableStyle" > *enter text to find github profiles </li>
                <button type="submit" className="btn btn-dark btn-block" >Search </button>
            </form>
            <br />
            {showClear && <button onClick={clearUser} className="btn btn-light btn-block">clear search</button>}
        </div>
    )
}
Search.propTypes = {
    searchUser: propTypes.func.isRequired,
    clearUser: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired
}
export default Search;