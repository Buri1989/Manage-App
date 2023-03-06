import React, { useEffect, useState } from 'react'
import Button from './Button'
import User from './User'

const Users = (props) => {


    useEffect(() => {
        setFilteredList(props.usersData)
    }, [props.usersData]);


    const changeSearch = (event) => {
        const search = event.target.value.toLowerCase();
        setFilteredList(props.usersData.filter(item =>
            (item.name.toLowerCase().includes(search) || item.email.toLowerCase().includes(search))))
    }
    const [selectedId, setSelectedId] = useState(-1);
    const [filteredList, setFilteredList] = useState(props.usersData);
    console.log("🚀 ~ file: Users.js:20 ~ Users ~ filteredList:", filteredList)
    const selectIdCall = (id) => {
        setSelectedId(id)
    }

    return (
        <div style={{
            width: "600px", borderStyle: "solid", borderColor: "grey", margin: 0 | 20, borderRadius: "25px"
        }}>
            <span style={{ margin: 0 | 10 }}>Search</span >
            <input type="text" onChange={changeSearch} style={{ margin: 15 | 20 }} />
            <Button name="Add" width="70px" onClick={props.navUser} />
            <br />

            {filteredList.map(item => <User key={item.id} data={item} selectIdCall={selectIdCall}
                boolSelect={item.id === selectedId} />)}

        </div>
    )
}

export default Users
