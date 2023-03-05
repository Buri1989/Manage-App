import React, { useState, useEffect, createContext } from 'react';
import '../Utils/utils';
import { getAllUsers, getUserPosts, getUsersTasks } from '../Utils/utils';



export const UpdateContext = createContext('default value');
export const RightContext = createContext('default')

const Main = () => {
    /*use state */
    const [users, setUsers] = useState([]);
    const [userTodos, setUserTodos] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [showRightData, setShowRightData] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [isPicked, setIsPickes] = useState(false);

    /*Mounting the app on starts */
    useEffect(() => {
        const fetchData = async () => {
            console.log('Show Data on start')
            const users = await getAllUsers();
            const todos = await getUsersTasks();
            const posts = await getUserPosts();
            users.forEach(element => {
                element["hasTodos"] = todos.filter(index => (index.userId === element.id) && (index.completed === false)).length
            });
            setUsers(users);
            setUserTodos(todos);
            setUserPosts(posts);
        }
        fetchData();
    }, []);


    return (
        <div>

        </div>
    )
}

export default Main