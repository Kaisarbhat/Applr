import { API_BASED_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_SUCCESS,REGISTER_SUCCESS,REGISTER_FAILURE} from "./auth_actionType";
import axios from 'axios';
export const loginUserAction = (loginData)=>async(dispatch)=>{
    try {
        const {data} = await axios.post(`${API_BASED_URL}/auth/signin`,loginData.data);

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("Login success ",data);
    } catch (error) {
        console.log("____"+error);
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}

export const registerUserAction = (loginData)=>async(dispatch)=>{
    try {
        const {data} = await axios.post(`${API_BASED_URL}/auth/signup`,loginData.data);

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("Register success ",data);
    } catch (error) {
        console.log("____"+error);
        dispatch({type:REGISTER_FAILURE,payload:error})
    }
}