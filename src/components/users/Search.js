import React, { useState, useContext } from 'react';
import AlertContext from '../../Context/alert/alertContext';
import GithubContext from '../../Context/github/githubContext';
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, changeText] = useState("");
    const { setAlert } = alertContext;
    const { clearUser, searchUsers, users } = githubContext;
    const showClear = users.length > 0 ? true : false
    const submitHandler = (e) => {
        e.preventDefault();
        if (text === "") {
            setAlert("please enter some text", "light");
        }
        else {
            searchUsers(text);
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
export default Search;