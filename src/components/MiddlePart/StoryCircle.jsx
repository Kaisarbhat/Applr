import React from 'react'
import {Avatar} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
const StoryCircle = () => {
  return (
    <div>
             <div className='flex flex-col items-center mr-4 cursor-pointer'>
          
          <Avatar style={{height:"4rem" , width: "4rem"}}
           src ='https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600'
           >
            <AddIcon  sx={{fontSize:"2rem"}}/>
           </Avatar>
            <p>username</p>
             </div>
    </div>
  )
}

export default StoryCircle
