import '../App.css'
import React, { useContext } from 'react'
import Button from './Button'
import { RightContext } from './Main'


const TodoItem = (props) => {
    const [updateTodoDone] = useContext(RightContext);

    const completeHandler = () => {
        updateTodoDone(props.userId, props.id)
    }


    return (
        <div style={{
            borderColor: "purple", borderStyle: "solid", width: "510px", margin: "10px", paddingLeft: "10px"
        }}>
            <span className='blue-Under'>Title: </span>
            <span style={{ marginLeft: "15px" }}>{props.title}</span>
            <br />
            <span className='blue-Under'>Completed: </span>
            <span style={{ marginLeft: "15px", marginRight: "60px" }}>{props.completed.toString()}</span>
            {!props.completed && <Button name="Mark Completed" width="130px" height="30px" onClick={completeHandler} />}
        </div>
    )
}

export default TodoItem
