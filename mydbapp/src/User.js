import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            ID: {user.id}
            <br />
            Name: {user.name}
            <br />
            Email: {user.email}

        </div>
    )
}

export default User
