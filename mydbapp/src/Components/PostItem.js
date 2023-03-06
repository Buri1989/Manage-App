import React from 'react'
import '../App.css'

const PostItem = (props) => {
    return (
        <div style={{
            borderColor: "purple", borderStyle: "solid", width: "510px", margin: "10px", paddingLeft: "10px"
        }}>
            <span className='blue-Under'>Title: </span>
            <span style={{ marginLeft: "15px" }}>{props.title}</span><br />
            <span className='blue-Under'>Body: </span>
            <span style={{ marginLeft: "15px", marginRight: "50px" }}>{props.body}</span><br />

        </div>
    )
}

export default PostItem