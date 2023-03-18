import { ButtonComp } from "./ButtonComp"
import { RightCompContext } from './MainComp'
import { useContext, useState } from 'react'

export const NewPost = (props) => {
    const contextArr = useContext(RightCompContext)
    const addPostItem = contextArr[2]
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")

    const addClickHandler = () => {
        let objAdd = { id: Math.floor(Math.random() * 10000) + 1000, userId: props.userId, title: postTitle, body: postBody }
        addPostItem(objAdd)
        props.setIsAddPost(false)
    }

    return (
        <>
            <div style={{
                width: "550px", borderStyle: "solid",
                paddingTop: "40px", paddingBottom: "15px", borderColor: "black", marginTop: "20px", marginBottom: "8px" /* display: "inline-block" */
            }}>
                <span className="blue-Under" style={{ marginLeft: "70px" }}>Title :</span>
                <input style={{ marginLeft: "60px" }} type="text" onChange={(e) => setPostTitle(e.target.value)} />
                <br /><br />
                <span className="blue-Under" style={{ marginLeft: "70px" }} >Body :</span>
                <input style={{ marginLeft: "54px" }} type="text" onChange={(e) => setPostBody(e.target.value)} />
                <br />
                <div style={{ marginTop: "40px", marginLeft: "220px" }}>
                    <ButtonComp name="Cancel" width="70px" height="30px" onClick={() => props.setIsAddPost(false)} />
                    <ButtonComp name="Add" width="70px" height="30px" onClick={addClickHandler} />
                </div>
            </div>
            <br />
        </>
    )
} 