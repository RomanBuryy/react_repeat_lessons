import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([])


    const getUserId = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(value => value.json())
            .then(value => setUser(value));
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, [])



    return (
        <div>
            {user && <div>{user.name}</div>}
            <br/>
            <br/>
            <br/>
            {users && users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}
        </div>
    );
};

export default Users;