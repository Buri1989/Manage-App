import axios from 'axios'

export const getAllUsersData = async () => {
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users")
    let newLst = resp.data.map(item => ({
        "id": item.id, "name": item.name, "email": item.email,
        "address": { "street": item.address.street, "city": item.address.city, "zipcode": item.address.zipcode }
    }))
    return newLst
}

export const getUserTodos = async () => {
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return resp.data
}

export const getUserPosts = async () => {
    let resp = await axios.get("https://jsonplaceholder.typicode.com/posts/")
    return resp.data
}

