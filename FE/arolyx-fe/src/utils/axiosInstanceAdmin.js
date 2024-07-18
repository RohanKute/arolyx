import axios from "axios";

const axiosInstanceAdmin = axios.create({
     baseURL :  'http://localhost:3000/admin',
     headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${localStorage.getItem('admin-token')}`
    },
})
const axiosInstanceAdminForm = axios.create({
    baseURL :  'http://localhost:3000/admin',
    headers: {
       'Content-Type': 'multipart/form-data',
       'Authorization' : `${localStorage.getItem('admin-token')}`
   },
})

axiosInstanceAdmin.interceptors.request.use(function (config) {
    let token = localStorage.getItem("admin-token");
    config.headers["Authorization"] = token;
    return config;
  });

  axiosInstanceAdminForm.interceptors.request.use(function (config) {
    let token = localStorage.getItem("admin-token");
    config.headers["Authorization"] = token;
    return config;
  });
  
export  { axiosInstanceAdmin , axiosInstanceAdminForm };
