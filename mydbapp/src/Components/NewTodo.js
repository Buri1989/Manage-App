import { ButtonComp } from "./ButtonComp"
import { RightCompContext } from './MainComp'
import { useContext, useState } from 'react'

export const NewTodo = (props) => {

    const contextArr = useContext(RightCompContext)
    const addTodoItem = contextArr[1]
    const [todoTitle, setTodoTitle] = useState("")
    const addClickHandler = () => {
        const objAdd = { id: Math.floor(Math.random() * 10000) + 1000, userId: props.userId, completed: false, title: todoTitle }
        addTodoItem(objAdd)
        props.setIsAddTodo(false)
    }

    return (
        <>
            <div style={{
                width: "550px", borderStyle: "solid",
                paddingTop: "40px", paddingBottom: "15px", borderColor: "black", marginTop: "20px", marginBottom: "8px"
            }}>
                <span className="blue-Under" style={{ marginLeft: "70px" }}>Title :</span>
                <input style={{ marginLeft: "60px" }} type="text" onChange={(e) => setTodoTitle(e.target.value)} />
                <br />
                <div style={{ marginTop: "40px", marginLeft: "220px" }}>
                    <ButtonComp name="Cancel" width="70px" height="30px" onClick={() => props.setIsAddTodo(false)} />
                    <ButtonComp name="Add" width="70px" height="30px" onClick={addClickHandler} />
                </div>
            </div>
            <br />
        </>
    )
} 