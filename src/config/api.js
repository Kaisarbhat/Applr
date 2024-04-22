import axios from "axios";
export const API_BASED_URL = "http://localhost:8080" ;
const jwtToken = localStorage.getItem("jwt");
export const api = axios.create({baseURL: API_BASED_URL,
    headers:{
        "Authorization" : `Bearer ${jwtToken}`,
        "Content_Type":"application/json"
    }

})