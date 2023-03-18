import { TodoItemComp } from "./TodoItemComp"

export const TodoListComp = (props) => {

    return (
        <div style={{ borderColor: "black", borderStyle: "solid" }}>
            {props.todoList.map(item => <TodoItemComp key={item.id} id={item.id} title={item.title}
                completed={item.completed} userId={item.userId} />)}
        </div>
    )
}