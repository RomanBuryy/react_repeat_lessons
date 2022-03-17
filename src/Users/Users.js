import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../services/user.service";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([])


    const getUserId = (id) => {
        userService.getById(id).then(value => setUser(value));
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
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