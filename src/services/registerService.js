import axios from "axios";

axios.defaults.baseURL='http://172.16.0.14:5000/user';

const registerUrl='/';

export const userRegister=async function (userDetails){
    const data={username:userDetails.username,email:userDetails.email,password:userDetails.password}
    return axios.post(registerUrl,data);
}