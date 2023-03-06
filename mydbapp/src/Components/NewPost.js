import React, { useContext, useState } from 'react'
import { RightContext } from './Main'
import Button from './Button'

const NewPost = (props) => {
    const contextArray = useContext(RightContext);
    const addNewPost = contextArray[2];
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const addClickHandler = () => {
        let objAdd = {
            id: Math.floor(Math.random() * 10000) + 1000, userId: props.userId, title: postTitle, body: postBody
        }
        addNewPost(objAdd)
        props.setIsAddPost(false)
    }


    return (
        <>
            <div style={{
                width: "550px", borderStyle: "solid",
                paddingTop: "40px", paddingBottom: "15px", borderColor: "black", marginTop: "20px", marginBottom: "8px"
            }}>
                <span className="blue-Under" style={{ marginLeft: "70px" }}>Title :</span>
                <input style={{ marginLeft: "60px" }} type="text" onChange={(event) => setPostTitle(event.target.value)} />
                <br /><br />
                <span className="blue-Under" style={{ marginLeft: "70px" }} >Body :</span>
                <input style={{ marginLeft: "54px" }} type="text" onChange={(event) => setPostBody(event.target.value)} />
                <br />
                <div style={{ marginTop: "40px", marginLeft: "220px" }}>
                    <Button name="Cancel" width="70px" height="30px" onClick={() => props.setIsAddPost(false)} />
                    <Button name="Add" width="70px" height="30px" onClick={addClickHandler} />
                </div>
            </div>
            <br />
        </>
    )
}

export default NewPost