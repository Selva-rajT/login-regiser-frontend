import axios from "axios";

axios.defaults.baseURL='http://172.16.0.14:5000/user';

const login='/';

export  const userLogin=async function(userEmail,userPassword){
    return await axios.get(login,{params:{
        email:userEmail,
        password:userPassword
    }});
}