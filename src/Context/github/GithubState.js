import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USER, SET_LOADING, CLEAR_USER, GET_REPOS, GET_USER } from '../types';
let githubClientSecret,githubClientId;
if(process.env.NODE_ENV!=="production"){
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId=process.env.GITHUB_CLIENT_ID;
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props => {
    const initialSate = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialSate);
    const { users, user, repos, loading } = state;
    // search user
    const searchUsers = async (text) => {
        // setAlert(null);
        setLoading()

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({ type: SEARCH_USER, payload: res.data.items })

    }
    const clearUser = () => {
        dispatch({ type: CLEAR_USER });
    }
    const getSingleUser = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${githubClientId}
          &client_secret=${githubClientSecret}`)
        dispatch({ type: GET_USER, payload: res.data })
    }
    // get repos
    const getRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${githubClientId}
          &client_secret=${githubClientSecret}`)
        dispatch({ type: GET_REPOS, payload: res.data });
    }

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    return (
        <GithubContext.Provider
            value={{
                users,
                user,
                repos,
                loading,
                searchUsers,
                clearUser,
                getSingleUser,
                getRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubState;