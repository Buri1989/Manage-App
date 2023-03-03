import React, { useState, useEffect } from 'react'
import { getAll } from './utils'
import User from './User'

const usersUrl = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('At Mounting');
        const fetchData = async () => {
            const { data } = await getAll(usersUrl);
            setUsers(data);
        }
        fetchData();
    }, []);


    return (
        <div>
            {users.map((user, index) => {
                return <User key={index} user={user} />;
            })}
        </div>

    )
}

export default Users
