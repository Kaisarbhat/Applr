import React,{ useEffect } from 'react';
import './App.css';
import Authentication from './Pages/Authentication/Authentication';
import {Routes,Route} from 'react-router-dom';
import Message from './Pages/Messages/Message';
import HomePage from './Pages/HomePage/HomePage';
import { useDispatch,useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/auth_action';

function App() {
  const {auth} = useSelector((store)=>store);
  const dispatch = useDispatch();;
  const jwt = localStorage.getItem("jwt");
  
  useEffect(()=>{
    dispatch(getProfileAction(jwt));
    console.log(auth);
  },[jwt])
  return (
    <div>
<Routes>
  <Route path ='/*' element ={auth?.user ? <HomePage/> : <Authentication/>} />
  <Route path ='/message' element ={<Message/>} />
  <Route path ="/*" element = {<Authentication/>}/>
  
</Routes>
    </div>
  );
}

export default App;
