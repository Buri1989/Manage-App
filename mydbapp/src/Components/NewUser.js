import { ButtonComp } from "./ButtonComp"
import { useState } from "react"
export const NewUser = (props) => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const addClickHandler = () => {
        let newItem = {
            id: Math.floor(Math.random() * 10000) + 1000, name: userName, email: userEmail,
            address: { street: "", city: "", zipcode: "" }, hasTodos: 0
        }
        props.addUserItem(newItem)
    }

    return (
        <div style={{ marginTop: "130px", paddingBottom: "50px" }}>
            <span>Add New User</span>

            <div style={{
                width: "550px", borderStyle: "solid",
                paddingTop: "40px", paddingBottom: "15px", borderColor: "black"
            }}>
                <span className="blue-Under" style={{ marginLeft: "70px" }}>Name :</span>
                <input style={{ marginLeft: "60px" }} type="text" onChange={(e) => setUserName(e.target.value)} />
                <br /><br />
                <span className="blue-Under" style={{ marginLeft: "70px" }} >Email :</span>
                <input style={{ marginLeft: "64px" }} type="text" onChange={(e) => setUserEmail(e.target.value)} />
                <br />
                <div style={{ marginTop: "40px", marginLeft: "220px" }}>
                    <ButtonComp name="Cancel" width="70px" height="30px" onClick={() => props.setShowAddUser(false)} />
                    <ButtonComp name="Add" width="70px" height="30px" onClick={addClickHandler} />
                </div>
            </div>
        </div>

    )
}