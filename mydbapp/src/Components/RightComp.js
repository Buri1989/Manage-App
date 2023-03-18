import { useEffect, useState } from "react"
import { ButtonComp } from "./ButtonComp"
import { NewPost } from "./NewPost"
import { NewTodo } from "./NewTodo"
import { PostListComp } from "./PostListComp"
import { TodoListComp } from "./TodoListComp"

export const RightComp = (props) => {

    const [isAddTodo, setIsAddTodo] = useState(false)
    const [isAddPost, setIsAddPost] = useState(false)
    const [filteredTodos, setFilteredTodos] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    useEffect(
        () => {
            setFilteredTodos(props.todosList.filter(item => item.userId === props.id))
            setFilteredPosts(props.postsList.filter(item => item.userId === props.id))
            setIsAddTodo(false)
            setIsAddPost(false)
        }, [props.todosList, props.id, props.postsList]


    )
    return (
        <div>
            <div style={{ marginBot: "20px", marginTop: "40px" }}>
                <span style={{ marginRight: "70px" }}>{!isAddTodo ? "Todos - User " : "New Todo - User "} {props.id}</span>
                {!isAddTodo && <ButtonComp name="Add" width="100px" height="30px" onClick={() => setIsAddTodo(true)} />}
                <br />
            </div>
            {isAddTodo ? <NewTodo setIsAddTodo={setIsAddTodo} userId={props.id} /> : <TodoListComp todoList={filteredTodos} />}
            {/*  <TodoListComp todoList={filteredTodos}/> */}
            <div style={{ marginBot: "20px" }}>
                <span style={{ marginRight: "70px" }}>{!isAddPost ? "Posts - User " : "New Post - User "}{props.id}</span>
                {!isAddPost && <ButtonComp name="Add" width="100px" height="30px" onClick={() => setIsAddPost(true)} />}
                <br />
            </div>
            {isAddPost ? <NewPost setIsAddPost={setIsAddPost} userId={props.id} /> : <PostListComp postList={filteredPosts} />}

        </div>
    )
}