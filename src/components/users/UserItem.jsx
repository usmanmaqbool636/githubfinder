import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    const { login, avatar_url } = props.user;
    return (
        <div className="card text-center" style={{ color: "white", backgroundColor: "rgba(0,0,0,0.7)", overflowWrap: "break-word" }}>
            <img
                src={avatar_url}
                alt="" className="round-img"
                style={{ width: "60px" }}
            />
            <h1>{login}</h1>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    );
}

UserItem.prototypes = {
    user: propTypes.object.isRequired,

}
export default UserItem;