import axios from "axios";

axios.defaults.baseURL='http://172.16.0.51:5000/user';
const url='/v1';

export const getOtp=async function(userEmail){
    console.log(userEmail);
    return axios.get(url,{
        params:{email:userEmail}
    });
}