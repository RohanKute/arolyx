import axios from "axios";

export const axiosInstanceAdmin = axios.create({
     baseURL :  'http://localhost:3000/admin',
     headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${localStorage.getItem('admin-token')}`
    },
})