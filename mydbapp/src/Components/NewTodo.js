import React, { useContext, useState } from 'react'
import { RightContext } from './Main'
import Button from './Button'

const NewTodos = (props) => {
    const contextArray = useContext(RightContext);
    const addTodoItem = contextArray[1];
    const [todoTitle, setTodoTitle] = useState("");

    const addClickForTodo = () => {
        const obj = {
            id: Math.floor(Math.random() * 10000) + 1000, userId: props.userId, completed: false, title: todoTitle
        };
        addTodoItem(obj);
        props.setIsAddTodo(false)
    }


    return (
        <div style={{
            width: "550px", borderStyle: "solid",
            paddingTop: "40px", paddingBottom: "15px", borderColor: "black", marginTop: "20px", marginBottom: "8px"
        }}>
            <span className='blue-Under' style={{ marginLeft: "70px" }}>Title</span>
            <input style={{ marginLeft: "60px" }} type="text" onChange={(event) => setTodoTitle(event.target.value)} />
            <br />
            <div style={{
                marginTop: "40px", marginLeft: "220px"
            }}>
                <Button name="Cancel" width="70px" height="30px" onClick={() => props.setIsAddTodo(false)} />
                <Button name="Add" width="70px" height="30px" onClick={addClickForTodo} />

            </div>
        </div>
    )
}

export default NewTodos