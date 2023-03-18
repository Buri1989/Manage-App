import axios from 'axios'

const userUrl = 'https://jsonplaceholder.typicode.com/users'
const todosUrl = 'https://jsonplaceholder.typicode.com/todos'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getAllUsersData = async () => {
    let { data } = await axios.get(userUrl)
    let newLst = data.map(item => ({
        "id": item.id, "name": item.name, "email": item.email,
        "address": { "street": item.address.street, "city": item.address.city, "zipcode": item.address.zipcode }
    }))
    return newLst
}

export const getUserTodos = async () => {
    let { data } = await axios.get(todosUrl)
    return data
}

export const getUserPosts = async () => {
    let { data } = await axios.get(postsUrl)
    return data
}

