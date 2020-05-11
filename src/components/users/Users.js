import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import prototypes from 'prop-types';
const Users = ({ loading,users }) => {
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
Users.defaultProps = {
    users: []
}
Users.prototypes = {
    users: prototypes.array.isRequired,
    loading: prototypes.bool.isRequired
}

export default Users;