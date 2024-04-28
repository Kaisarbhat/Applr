import { API_BASED_URL, api } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_SUCCESS,REGISTER_SUCCESS,REGISTER_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, LOGIN_REQUEST, REGISTER_REQUEST, GET_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE} from "./auth_actionType";
import axios from 'axios';
export const loginUserAction = (loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    try {
        const {data} = await axios.post(`${API_BASED_URL}/auth/signin`,loginData.data);

        if(data.token){
            localStorage.setItem("jwt",data.token);
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.token})
        console.log("Login success ",data);
    } catch (error) {
        console.log("____"+error);
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}

export const registerUserAction = (loginData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST});
    try {
        const {data} = await axios.post(`${API_BASED_URL}/auth/signup`,loginData.data);

        if(data.token){
            localStorage.setItem("jwt",data.token);
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("Register success ",data);
    } catch (error) {
        console.log("____"+error);
        dispatch({type:REGISTER_FAILURE,payload:error})
    }
}


export const getProfileAction = (token)=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_REQUEST});
    try {
        const {data} = await axios.get(`${API_BASED_URL}/api/users/profile`,
        {
            headers:{
            "Authorization":`Bearer ${token}`,
        },
    });

        console.log("Profile ",data);
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("____"+error);
        dispatch({type:GET_PROFILE_FAILURE,payload:error})
    }
}

export const updateProfileAction = (reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_PROFILE_REQUEST});
    try {
        const {data} = await api.put(`${API_BASED_URL}/api/users`,reqData);

        console.log("Update Profile ",data);
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("____"+error);
        dispatch({type:UPDATE_PROFILE_FAILURE,payload:error})
    }
}



export const searchUserAction = (query)=>async(dispatch)=>{
    dispatch({type:SEARCH_USER_REQUEST});
    try {
        const {data} = await api.get(`/api/users/search?query=${query}`);
        console.log("Search user ____",data);
        dispatch({type:SEARCH_USER_SUCCESS,payload:data})
    } catch (error) {
        console.log("____"+error);
        dispatch({type:SEARCH_USER_FAILURE,payload:error})
    }
}