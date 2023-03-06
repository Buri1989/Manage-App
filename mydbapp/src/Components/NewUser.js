import React, { useState } from 'react'
import Button from './Button'

const NewUser = (props) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const addClickForUser = () => {

        const newUser = {
            id: Math.floor(Math.random() * 10000) + 1000, name: userName, email: userEmail,
            address: { street: "", city: "", zipcode: "" }, hasTodos: 0
        };
        props.addUser(newUser);

    }


    return (
        <div style={{
            marginTop: "130px", paddingBottom: "50px"
        }}>
            <span>Add New User</span>
            <div style={{ width: "550px", borderStyle: "solid", paddingTop: "40px", paddingBottom: "15px", borderColor: "black" }}>
                <span className='blue-Under' style={{ marginLeft: "70px" }}>Name :</span>
                <input style={{ marginLeft: "60px" }} type="text" onChange={(event) => setUserName(event.target.value)} />
                <br /><br />
                <span className='blue-Under' style={{ marginLeft: "70px" }}>Email :</span>
                <input style={{ marginLeft: "64px" }} type="text" onChange={(event) => setUserEmail(event.target.value)} />
                <br />
                <div style={{ marinTop: "40px", marginLeft: "220px" }}>
                    <Button name="Cancel" width="70px" height="30px" onClick={() => props.setShowAddUser(false)} />
                    <Button name="Add" width="70px" height="30px" onClick={addClickForUser} />
                </div>
            </div>

        </div>
    )
}

export default NewUser
