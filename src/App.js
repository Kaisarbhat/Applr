import React from 'react';
import './App.css';
import Authentication from './Pages/Authentication/Authentication';
import {Routes,Route} from 'react-router-dom';
import Message from './Pages/Messages/Message'
import HomePage from './Pages/HomePage/HomePage';
function App() {
  return (
    <div>
<Routes>
  <Route path ='/*' element ={<HomePage/>} />
  <Route path ='/message' element ={<Message/>} />
  <Route path ='/*' element = {<Authentication/>}/>
</Routes>

      
    </div>
  );
}

export default App;
