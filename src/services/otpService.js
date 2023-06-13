import axios from "axios";

axios.defaults.baseURL='http://172.16.0.51:5000/user';
const url='/v1';
const verifyotp='/v2';

export const getOtp=async function(userEmail){

    return axios.get(url,{
        params:{email:userEmail}
    });
}

export const verifyOtp=async function(userOtp){
    return axios.get(verifyotp,{
        params:{otp:userOtp}
    })
}