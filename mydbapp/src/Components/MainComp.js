import { UsersComp } from "./UsersComp"
import { useState, useEffect, createContext } from "react"
import { getAllUsersData, getUserPosts, getUserTodos } from "../Utils/UsersUtils"
import { RightComp } from "./RightComp"
import { NewUser } from "./NewUser"
export const UpdateContext = createContext("default value")
export const RightCompContext = createContext("default")

export const MainComp = () => {

    const [usersData, setUsersData] = useState([])
    const [todosList, setTodosList] = useState([])
    const [postsList, setPostsList] = useState([])
    const [showRightComp, setShowRightComp] = useState(false)
    const [showAddUser, setShowAddUser] = useState(false)
    const [idSelected, setIdSelected] = useState(0)
    useEffect(
        () => {
            const getAllData = async () => {
                let usersList = await getAllUsersData()
                let todos = await getUserTodos()
                let posts = await getUserPosts()
                usersList.forEach(element => {
                    element["hasTodos"] = todos.filter(item => item.userId === element.id &&
                        item.completed === false).length
                });
                setUsersData(usersList)
                setTodosList(todos)
                setPostsList(posts)

            }
            getAllData()
        }, []

    )
    const updateUsersData = (userItem) => {
        let idList = usersData.map(item => item.id)
        let index = idList.indexOf(userItem.id)
        let newUsersData = [...usersData]
        newUsersData[index] = userItem
        setUsersData(newUsersData)
    }

    const deleteUserData = (id) => {
        let idList = usersData.map(item => item.id)
        let index = idList.indexOf(id)

        let newUsersData = [...usersData]
        newUsersData.splice(index, 1)
        setUsersData(newUsersData)
    }

    const selectUserId = (id) => {
        setIdSelected(id)
        setShowAddUser(false)
        setShowRightComp(true)
    }

    const updateTaskDone = (userId, taskId) => {
        let idList = todosList.map(item => item.id)
        let index = idList.indexOf(taskId)
        let newTodosList = [...todosList]
        newTodosList[index].completed = true
        setTodosList(newTodosList)

        idList = usersData.map(item => item.id)
        index = idList.indexOf(userId)
        let newUsersData = [...usersData]
        newUsersData[index].hasTodos--;
        setUsersData(newUsersData)
    }

    const addTodoItem = (newItem) => {
        setTodosList([newItem, ...todosList])  //and update usersData list with ++ hasTodos, item contains the userId

        let idList = usersData.map(item => item.id)
        let index = idList.indexOf(newItem.userId)
        let newUsersData = [...usersData]
        newUsersData[index].hasTodos++;
        setUsersData(newUsersData)
    }



    const addPostItem = (newItem) => {
        setPostsList([newItem, ...postsList])
    }

    const addUserItem = (newItem) => {
        setUsersData([newItem, ...usersData])
        setShowAddUser(false)
    }
    const navigateUser = () => {

        setShowRightComp(false)
        setShowAddUser(true)
    }

    return (
        <UpdateContext.Provider value={[updateUsersData, deleteUserData, selectUserId]}>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td valign="top">
                                <UsersComp usersData={usersData} navigateUser={navigateUser} />
                            </td>
                            <td valign="top">
                                <RightCompContext.Provider value={[updateTaskDone, addTodoItem, addPostItem]} >
                                    {showRightComp && <RightComp id={idSelected} todosList={todosList} postsList={postsList} />}
                                    {showAddUser && <NewUser addUserItem={addUserItem} setShowAddUser={setShowAddUser} />}
                                </RightCompContext.Provider>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </UpdateContext.Provider>
    )
}

/*Use filter if you want to find all items in an array that meet a specific condition. 
Use find if you want to check if that at least one item meets a specific condition. 
Use includes if you want to check if an array contains a particular value. 
Use indexOf if you want to find the index of a particular item in an array.24 Jun 2020
*/