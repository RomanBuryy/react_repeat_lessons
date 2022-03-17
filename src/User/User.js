import React from 'react';

const User = ({user: {id, name}, getUserId}) => {



    return (
        <div>
            <p>{id}--{name}</p>
            <button onClick={event => {
                getUserId(id)
            }}>get user id
            </button>
        </div>
    );
};

export default User;