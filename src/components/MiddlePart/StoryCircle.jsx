import React from 'react'
import { styled } from '@mui/material/styles'
import {Avatar} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
const StoryCircle = () => {
  return (
    <div>
             <div className='flex flex-col items-center mr-4 cursor-pointer'>
          
          <Avatar sx={{height:"3rem" , width: "3rem"}}
           src =''
           >
            <AddIcon  sx={{fontSize:"2rem"}}/>
           </Avatar>
            <p>username</p>
             </div>
    </div>
  )
}

export default StoryCircle
