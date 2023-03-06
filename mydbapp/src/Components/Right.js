import React, { useState, useEffect } from 'react'
import Button from './Button'
import NewPost from './NewPost'
import NewTodos from './NewTodos'
import PostList from './PostList'
import TodoList from './TodoList'


const Right = (props) => {
    const [isAddTodo, setIsAddTodo] = useState(false);
    const [isAddPost, setIsAddPost] = useState(false);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        setFilteredTodos(props.userTodos.filter(item => item.userId === props.id))
        setFilteredPosts(props.userPosts.filter(item => item.userId === props.id))
        setIsAddTodo(false);
        setIsAddPost(false);
    }, [props.userTodos, props.id, props.userPosts]);

    return (
        <div>
            <div style={{ marginBottom: "20px", marginTop: "40px" }}>
                <span style={{ marginRight: "70px" }}>{!isAddTodo ? "Todos - User" : "New Todo - User"} {props.id}</span>
                {!isAddTodo && <Button name="Add" width="100px" height="30px" onClick={() => setIsAddTodo(true)} />}
                <br />
            </div>
            {isAddTodo ? <NewTodos setIsAddTodo={setIsAddTodo} userId={props.id} /> : <TodoList todoList={filteredTodos} />}
            <div style={{ marginBottom: "20px" }}>
                <span style={{ marginRight: "70px" }}>{!isAddPost ? "Todos - User" : "New Todo - User"} {props.id}</span>
                {!isAddPost && <Button name="Add" width="100px" height="30px" onClick={() => setIsAddPost(true)} />}
                <br />
            </div>
            {isAddTodo ? <NewPost setIsAddPost={setIsAddPost} userId={props.id} /> : <PostList postList={filteredPosts} />}
        </div>
    )
}

export default Right
