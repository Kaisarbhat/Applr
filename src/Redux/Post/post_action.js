import { type } from "@testing-library/user-event/dist/type";
import { api } from "../../config/api"
import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, CREATE_POST_FAILURE,GET_ALL_POST_SUCCESS, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS,GET_USERS_POST_FAILURE } from "./post_actionType"

export const createPostAction = (postData) => async(dispatch) => {
 dispatch({type: CREATE_POST_REQUEST})

 try {
    const {data} = await api.post('/api/posts',postData);
    dispatch({type:CREATE_POST_SUCCESS,payload:data});
    console.log("Created Post ",data);
 } catch (error) {
    dispatch({type:CREATE_POST_FAILURE,payload:error});
    console.log("Error ",error);
 }
}


export const getAllPostAction = () => async(dispatch) => {
 dispatch({type: GET_ALL_POST_REQUEST})

 try {
    const {data} = await api.get('/api/posts');
    dispatch({type:GET_ALL_POST_SUCCESS,payload:data});
    console.log("get all  Posts ",data);
 } catch (error) {
    dispatch({type:GET_ALL_POST_FAILURE,payload:error});
    console.log("Error ",error);
 }
}
export const getUsersPostAction = (userId) => async(dispatch) => {
 dispatch({type: GET_USERS_POST_REQUEST})

 try {
    const {data} = await api.get(`/api/posts/users/${userId}`);
    dispatch({type:GET_USERS_POST_SUCCESS,payload:data});
    console.log("get users  Posts ",data);
 } catch (error) {
    dispatch({type:GET_USERS_POST_FAILURE,payload:error});
    console.log("Error ",error);
 }
}
