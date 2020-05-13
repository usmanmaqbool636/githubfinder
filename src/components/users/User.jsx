import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/repos';
import GithubContext from '../../Context/github/githubContext';

import { faTimesCircle,faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { loading,getSingleUser,repos,getRepos,user } = githubContext;

    useEffect(() => {
        getSingleUser(match.params.login);
        getRepos(match.params.login);
    }, [match.params.login])

    if (loading) {
        return <Spinner />
    }
    else {
        const {
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = user;
        return (
            <>
                <Link to="/" className="btn btn-light">goback</Link>
                <span style={{ color: "white" }}> Hireable </span> : {" "}
                {hireable ? <FontAwesomeIcon icon={faCheck} className="text-success"/> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />}
                <div className="card grid-2" style={{ color: "white" }}>
                    <div className="all-center">
                        <img
                            src={avatar_url}
                            alt="avatar"
                            className="round-img"
                            style={{ width: "150px" }}
                        />
                        <h1>{login}</h1>
                        <p>location : {location || "not available"} </p>
                    </div>
                    <div>
                        <h1 style={{ color: "#a4a6a5" }}>Bio</h1>
                        {bio ? <>
                            <p>{bio}</p>
                        </> : "bio not defined"}
                        <div>
                            <a href={html_url} className=" btn btn-dark my-1">Visits Github profile </a>
                        </div>
                        <ul>
                            <li>
                                {login && <>
                                    <strong>Username : </strong> {login}
                                </>}
                            </li>
                            <li>
                                <strong>Company : </strong>{company ?
                                    company
                                    : "null"}
                            </li>
                            <li>
                                <strong>website : </strong>{blog ?
                                    { blog }
                                    : "null"}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card info text-center" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="badge badge-primary">
                        Followers : {followers}
                    </div>
                    <div className="badge badge-success">
                        Following : {following}
                    </div>
                    <div className="badge badge-light">
                        Public repo : {public_repos}
                    </div>
                    <div className="badge badge-dark">
                        Public Gist : {public_gists}
                    </div>
                </div>
                <Repos repos={repos} />
            </>
        );
    }
}


export default User;