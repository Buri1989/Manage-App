import { UsersComp } from "./UsersComp";
import { useState, useEffect, createContext } from "react";
import { getAllUsersData, getUserPosts, getUserTodos } from "../Utils/utils";
import { RightComp } from "./RightComp";
import { NewUser } from "./NewUser";

export const UpdateContext = createContext("default value");
export const RightCompContext = createContext("default");

export const MainComp = () => {
  const [usersData, setUsersData] = useState([]);
  const [todosList, setTodosList] = useState([]);
  const [postsList, setPostsList] = useState([]);
  const [showRightComp, setShowRightComp] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [idSelected, setIdSelected] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const usersList = await getAllUsersData();
      const todos = await getUserTodos();
      const posts = await getUserPosts();
      usersList.forEach((element) => {
        element["hasTodos"] = todos.filter(
          (item) => item.userId === element.id && item.completed === false
        ).length;
      });
      setUsersData(usersList);
      setTodosList(todos);
      setPostsList(posts);
    };
    fetchData();
  }, []);
  const updateUsersData = (userItem) => {
    var idList = usersData.map((item) => item.id);
    var index = idList.indexOf(userItem.id);
    const newUsersData = [...usersData];
    newUsersData[index] = userItem;
    setUsersData(newUsersData);
  };

  const deleteUserData = (id) => {
    const idList = usersData.map((item) => item.id);
    const index = idList.indexOf(id);

    const newUsersData = [...usersData];
    newUsersData.splice(index, 1);
    setUsersData(newUsersData);
  };

  const selectUserId = (id) => {
    setIdSelected(id);
    setShowAddUser(false);
    setShowRightComp(true);
  };

  const updateTaskDone = (userId, taskId) => {
    var idList = todosList.map((item) => item.id);
    var index = idList.indexOf(taskId);
    const newTodosList = [...todosList];
    newTodosList[index].completed = true;
    setTodosList(newTodosList);

    idList = usersData.map((item) => item.id);
    index = idList.indexOf(userId);
    var newUsersData = [...usersData];
    newUsersData[index].hasTodos--;
    setUsersData(newUsersData);
  };

  const addTodoItem = (newItem) => {
    setTodosList([newItem, ...todosList]);

    const idList = usersData.map((item) => item.id);
    const index = idList.indexOf(newItem.userId);
    const newUsersData = [...usersData];
    newUsersData[index].hasTodos++;
    setUsersData(newUsersData);
  };

  const addPostItem = (newItem) => {
    setPostsList([newItem, ...postsList]);
  };

  const addUserItem = (newItem) => {
    setUsersData([newItem, ...usersData]);
    setShowAddUser(false);
  };
  const navigateUser = () => {
    setShowRightComp(false);
    setShowAddUser(true);
  };

  return (
    <UpdateContext.Provider
      value={[updateUsersData, deleteUserData, selectUserId]}
    >
      <div>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <UsersComp usersData={usersData} navigateUser={navigateUser} />
              </td>
              <td valign="top">
                <RightCompContext.Provider
                  value={[updateTaskDone, addTodoItem, addPostItem]}
                >
                  {showRightComp && (
                    <RightComp
                      id={idSelected}
                      todosList={todosList}
                      postsList={postsList}
                    />
                  )}
                  {showAddUser && (
                    <NewUser
                      addUserItem={addUserItem}
                      setShowAddUser={setShowAddUser}
                    />
                  )}
                </RightCompContext.Provider>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </UpdateContext.Provider>
  );
};
