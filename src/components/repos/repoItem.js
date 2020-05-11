import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

const RepoItem = ({ repo }) => {
    const { created_at, forks, size, language } = repo;
    return (
        <div className="card"  >
            <h1>
                <a href={repo.html_url} style={{ color: "#a4a6a5" }}>{repo.name}</a>
            </h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    created At : {moment(created_at).fromNow()}
                </div>
                <div>
                    forks : {forks}
                </div>
                <div>
                    Size : {size}
                </div>
                <div>
                    Language : {language ? language : "Not Defined"}
                </div>
            </div>
        </div>
    )
}
RepoItem.propTypes = {
    repo: propTypes.object
}
export default RepoItem;