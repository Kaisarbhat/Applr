import { api } from "../../config/api"
import * as actionType from './message_actionType'


export const createMessage=(message) => async(dispatch)=>{
   dispatch({type:actionType.CREATE_MESSAGE_REQUEST})
    try {
    const {data} = await api.post(`/api/messages/chat/${message.chatId}`,message);
    console.log("Created message  ",data);
    dispatch({type:actionType.CREATE_MESSAGE_SUCCESS,
        payload : data})
    } catch (error) {
        console.log("CATCH ERROR",error);

    dispatch({
       type : actionType.CREATE_MESSAGE_FAILURE,
       payload:error
    });
    }
};


export const createChat=(chat) => async(dispatch)=>{
   dispatch({type:actionType.CREATE_CHAT_REQUEST})
    try {
    const {data} = await api.post(`/api/chat`,chat);
    console.log("Created chat  ",data);
    dispatch({type:actionType.CREATE_CHAT_SUCCESS,
        payload : data})
    } catch (error) {
        console.log("CATCH ERROR",error);

    dispatch({
       type : actionType.CREATE_CHAT_FAILURE,
       payload:error
    });
    }
};


export const getAllChats=() => async(dispatch)=>{
   dispatch({type:actionType.GET_ALL_CHATS_REQUEST})
    try {
    const {data} = await api.get(`/api/chat`);
    console.log("Get Users chats  ",data);
    dispatch({type:actionType.GET_ALL_CHATS_SUCCESS,
        payload : data})
    } catch (error) {
        console.log("CATCH ERROR",error);

    dispatch({
       type : actionType.GET_ALL_CHATS_FAILURE,
       payload:error
    });
    }
};