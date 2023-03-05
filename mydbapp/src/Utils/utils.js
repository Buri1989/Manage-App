import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos/';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

/*Getting all users data from - 'https://jsonplaceholder.typicode.com/users' */
const getAllUsers = async () => {
    const { data: userData } = await axios.get(usersUrl);
    const fullData = userData.map((user) => ({
        "id": user.id, "name": user.name, "email": user.email,
        "address": { "street": user.address.street, "city": user.address.city, "zipcode": user.address.zipcode }
    }))
    return fullData;
};

/*Getting all users todos from - 'https://jsonplaceholder.typicode.com/todos/' */
const getUsersTasks = async () => {
    const { data: userTasks } = await axios.get(todosUrl);
    return userTasks;
};

/*Getting all users posts from - 'https://jsonplaceholder.typicode.com/posts/' */
const getUserPosts = async () => {
    const { data: userPosts } = await axios.get(postsUrl);
    return userPosts;
};

export { getAllUsers, getUsersTasks, getUserPosts }

