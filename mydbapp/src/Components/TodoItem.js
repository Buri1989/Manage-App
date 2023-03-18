import '../App.css'
import { ButtonComp } from './ButtonComp'
import { RightCompContext } from './MainComp'
import { useContext } from 'react'
export const TodoItemComp = (props) => {

    const completeHandler = () => {
        updateTaskDone(props.userId, props.id)
    }

    const [updateTaskDone] = useContext(RightCompContext)
    return (
        <div style={{ borderColor: "purple", borderStyle: "solid", width: "510px", margin: "10px", paddingLeft: "10px" }}>
            <span className="blue-Under">Title: </span> <span style={{ marginLeft: "15px" }}>{props.title}</span>
            <br />
            <span className="blue-Under">Completed: </span> <span style={{ marginLeft: "15px", marginRight: "60px" }}>{props.completed.toString()}</span>
            {!props.completed &&
                <ButtonComp name="Mark Completed" width="130px" height="30px" onClick={completeHandler} />}
        </div>
    )
}