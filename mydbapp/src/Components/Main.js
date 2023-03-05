import React, { useState, useEffect, createContext } from 'react';
import { getAllUsers, getUserPosts, getUsersTasks } from '../Utils/utils';
import Users from './Users'
import Right from './Right'
import NewUser from './NewUser'



export const UpdateContext = createContext('default value');
export const RightContext = createContext('default')

const Main = () => {
    /*use state */
    const [users, setUsers] = useState([]);
    const [userTodos, setUserTodos] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [showRightData, setShowRightData] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [idPicked, setIdPicked] = useState(false);

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

    /*Update user info */
    const updateUserInfo = (userInfo) => {
        const idData = users.map(item => item.id);
        const index = idData.indexOf(userInfo.id);
        const newUserInfo = [...users];
        newUserInfo[index] = userInfo;
        setUsers(newUserInfo);
    };

    /*Delete user info */
    const deleteUserInfo = (id) => {
        const idData = users.map(item => item.id);
        const index = idData.indexOf(id);
        const newUserInfo = [...users];
        newUserInfo.splice(index, 1);
        setUsers(newUserInfo);
    };

    /*Select user id */
    const selectUserId = (id) => {
        setIdPicked(id);
        setShowAddUser(false);
        setShowRightData(true);
    }

    /*Update task that are done */
    const updateTaskDone = (userId, taskId) => {
        let idData = userTodos.map(item => item.id);
        let index = idData.indexOf(taskId);
        const newTaskInfo = [...userTodos];
        newTaskInfo[index].completed = true;
        setUserTodos(newTaskInfo);

        idData = users.map(item => item.id);
        index = idData.indexOf(userId);
        const newUserInfo = [...users];
        newUserInfo[index].hasTodos--;
        setUsers(newUserInfo);
    };

    /*Add task */
    const addTask = (newTask) => {
        setUserTodos([newTask, ...userTodos])  //and update usersData list with ++ hasTodos, item contains the userId

        let idData = users.map(item => item.id)
        let index = idData.indexOf(newTask.userId)
        let newUsersInfo = [...users]
        newUsersInfo[index].hasTodos++;
        setUsers(newUsersInfo)
    }

    /*Add Task */
    const addPost = (newPost) => {
        setUserPosts([newPost, ...userPosts]);
    };

    /*Add User */
    const addUser = (newUser) => {
        setUsers([newUser, ...users]);
        setShowAddUser(false)
    };

    /*Navigate between users */
    const navUser = () => {
        setShowRightData(false);
        setShowAddUser(true);
    };


    return (
        <UpdateContext.Provider value={[updateUserInfo, deleteUserInfo, selectUserId]}>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td valign='top'>
                                <Users users={users} navUser={navUser} />
                            </td>
                            <td valign='top'>
                                <RightContext.Provider value={[updateTaskDone, addTask, addPost]}>
                                    {showRightData && <Right id={idPicked} userTodos={userTodos} userPosts={userPosts} />}
                                    {showAddUser && <NewUser addUser={addUser} setShowAddUser={setShowAddUser} />}
                                </RightContext.Provider>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </UpdateContext.Provider>
    )
}

export default Main