import React, { useState, useContext } from 'react'
import Button from './Button'
import OtherData from './OtherData'
import { UpdateContext } from './Main'
import "../App.css";


function User(props) {
    const [showOther, setShowOther] = useState(false);
    const [updateData, setUpdateData] = useState({
        id: props.data.id, name: props.data.name, email: props.data.email, address: props.data.address,
        hasTodos: props.data.hasTodos
    });


    const mouseOver = () => {
        setShowOther(true);
    };


    const mouseClick = () => {
        setShowOther(!showOther);
    };

    const [updateCallback, deleteCallback, selectCallback] = useContext(UpdateContext)

    const updateHandler = () => {
        updateCallback(updateData)
    };

    const deleteHandler = () => {
        deleteCallback(updateData.id);
    };

    const selectHandler = () => {
        props.selectIdCall(props.data.id);
        selectCallback(props.data.id)
    };

    return (
        <div style={{
            width: "550px", borderStyle: "solid", borderColor: props.data.hasTodos > 0 ? "red" : "green",
            backgroundColor: props.boolSelect ? "orangered" : "white", marginBottom: "25px", marginLeft: "15px", paddingLeft: "20px"
        }}>
            <span className='blue-Under-Cursor' onClick={selectHandler} >ID : </span>
            <span style={{ cursor: "pointer" }} onClick={selectHandler}>{props.data.id}</span><br />
            <label className='blue-Under'>Name : </label><input type="text" value={updateData.name}
                onChange={(event) => { setUpdateData({ ...updateData, name: event.target.value }) }} /><br />
            <label className='blue-Under'>Email : </label><input type="text" value={updateData.email}
                onChange={(event) => { setUpdateData({ ...OtherData, email: event.target.value }) }} /><br />
            <div style={{ marginTop: "20px", margin: "8px", display: "inline-block" }}>
                <OtherData mouseOver={mouseOver} mouseClick={mouseClick} />
                {showOther && <>
                    <br />
                    <label className='blue-Under'>Street : </label>
                    <input type="text" value={updateData.address.street}
                        onChange={(event) => { setUpdateData({ ...updateData.address, street: event.target.value }) }} /><br />
                    <label className='blue-Under'>City : </label>
                    <input type="text" value={updateData.address.city}
                        onChange={(event) => { setUpdateData({ ...updateData.address, city: event.target.value }) }} /><br />
                    <label className='blue-Under'>Zipcode : </label>
                    <input type="text" value={updateData.address.zipcode}
                        onChange={(event) => { setUpdateData({ ...updateData.address, zipcode: event.target.value }) }} /><br />
                </>}
                <div style={{ display: "inline-block", marginLeft: showOther ? "150px" : "0px" }}>
                    <Button name="Update" width="70px" height="35px" onClick={updateHandler} />
                    <Button name="Update" width="70px" height="35px" onClick={deleteHandler} />
                </div>
            </div>
        </div>
    )
}

export default User
