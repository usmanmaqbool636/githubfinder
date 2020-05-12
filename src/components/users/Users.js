import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import GithubContext from '../../Context/github/githubContext';
const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;
    if (loading) {
        return <Spinner />
    }
    if (users.length > 0) {
        const renderUser = users.map(user => <UserItem key={user.id} user={user} />)
        return (
            <div
                // style={userStyle}
                className="boxes">
                {renderUser}
            </div>
        );
    }
    else {
        return null
    }

}

export default Users;