import axios from "axios";

const axiosInstance = axios.create({
     baseURL :  'http://localhost:3000/user',
     headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`
    },
})

axiosInstance.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    config.headers["Authorization"] = token;
    return config;
  });

export  { axiosInstance } ;