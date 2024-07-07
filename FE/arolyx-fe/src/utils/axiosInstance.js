import axios from "axios";

export const axiosInstance = axios.create({
     baseURL :  'http://localhost:3000/user',
     headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`
    },
})