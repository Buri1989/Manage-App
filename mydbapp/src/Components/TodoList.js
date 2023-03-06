import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    return (
        <div style={{
            borderColor: "black", borderStyle: "solid"
        }}>
            {props.userTodos.map(item => <TodoItem key={item.id} id={item.id} title={item.title}
                completed={item.completed} userId={item.userId} />)}
        </div>
    )
}

export default TodoList
