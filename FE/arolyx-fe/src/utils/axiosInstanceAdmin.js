import axios from "axios";

export const axiosInstanceAdmin = axios.create({
     baseURL :  'http://localhost:3000/admin',
     headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${localStorage.getItem('admin-token')}`
    },
})
export const axiosInstanceAdminForm = axios.create({
    baseURL :  'http://localhost:3000/admin',
    headers: {
       'Content-Type': 'multipart/form-data',
       'Authorization' : `${localStorage.getItem('admin-token')}`
   },
})