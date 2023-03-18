import { useState, useContext } from "react"
import { ButtonComp } from "./ButtonComp"
import { OtherData } from "./OtherData"
import { UpdateContext } from "./MainComp"
import "../App.css"
export const UserComp = (props) => {
    const [isShowOther, setIsShowOther] = useState(false)
    const [updateData, setUpdateData] = useState({
        id: props.data.id, name: props.data.name, email: props.data.email, address: props.data.address,
        hasTodos: props.data.hasTodos
    })

    const mouseOverCall = () => {
        setIsShowOther(true)
    }

    const mouseClickCall = () => {
        setIsShowOther(!isShowOther)
    }

    const [updateCallback, deleteCallback, selectCallback] = useContext(UpdateContext)

    const updateHandler = () => {
        updateCallback(updateData)
    }

    const deleteHandler = () => {
        deleteCallback(updateData.id)
    }

    const selectIdHandler = () => {
        props.selectCall(props.data.id)
        selectCallback(props.data.id)

    }


    return (
        <div style={{
            width: "550px", borderStyle: "solid", borderColor: props.data.hasTodos > 0 ? "red" : "green",
            backgroundColor: props.boolSelect ? "orangered" : "white", marginBottom: "25px", marginLeft: "15px", paddingLeft: "20px"
        }}>
            <span className="blue-Under-Cursor" onClick={selectIdHandler}>ID : </span> <span style={{ cursor: "pointer" }} onClick={selectIdHandler}>{props.data.id}</span> <br />
            <label className="blue-Under">Name : </label> <input type="text" value={updateData.name} onChange={(event) => setUpdateData({ ...updateData, name: event.target.value })} /><br />
            <label className="blue-Under">Email : </label> <input type="text" value={updateData.email} onChange={(event) => setUpdateData({ ...updateData, email: event.target.value })} /><br />
            <div style={{ marginTop: "20px", marginBottom: "8px", display: "inline-block" }}>
                <OtherData mOver={mouseOverCall} mClick={mouseClickCall} />
                {isShowOther && <>
                    <br />
                    <label className="blue-Under">Street : </label><input type="text" value={updateData.address.street} onChange={(event) => setUpdateData({ ...updateData, address: { ...updateData.address, street: event.target.value } })} /> <br />
                    <label className="blue-Under">City : </label> <input type="text" value={updateData.address.city} onChange={(event) => setUpdateData({ ...updateData, address: { ...updateData.address, city: event.target.value } })} /><br />
                    <label className="blue-Under">Zipcode : </label> <input type="text" value={updateData.address.zipcode} onChange={(event) => setUpdateData({ ...updateData, address: { ...updateData.address, zipcode: event.target.value } })} /><br />
                </>}
                <div style={{ display: "inline-block", marginLeft: isShowOther ? "150px" : "0px" }}>
                    <ButtonComp name="Update" width="70px" height="35px" onClick={updateHandler} />
                    <ButtonComp name="Delete" width="70px" height="35px" onClick={deleteHandler} />
                </div>
            </div>


        </div>
    )
}