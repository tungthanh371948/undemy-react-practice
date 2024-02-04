import axios from './customize-axios'

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const PostCreateUser = (name,job) => {
    return axios.post("/api/users", name, job)
}


export {fetchAllUser, PostCreateUser}; 


