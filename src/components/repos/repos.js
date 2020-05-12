import React from 'react';
import RepoItem from './repoItem';
import propTypes from 'prop-types';
const Repos = ({ repos }) => {
    if (repos.length > 0) {
        return (
            <span style={{ color: "white" }}>
                <h1 style={{ textAlign: "center", color: "#e8e8ed" }} > Repos </h1>
                {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
            </span>
        )
    }
    return (
        <h3>
            No Repo Found
        </h3>
    );
}

Repos.propTypes = {
    repos: propTypes.array.isRequired
}
export default Repos;