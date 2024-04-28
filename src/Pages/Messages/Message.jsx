import { Grid } from '@material-ui/core'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar,IconButton } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SearchUser from './../../components/SearchUser/SearchUser';
import UserChatCard from '../../components/SearchUser/UserChatCard';
import ChatMessage from './ChatMessage';


const Message = () => {
  const handleSelectImage = () =>{
    console.log("handle select image")
  }
  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid className='px-5'item  xs ={3}>
          <div className='flex h-full justify-between space-x-2'>
               <div className='w-full'>
               <div className='flex space-x-4 items-center py-5'>
                  <WestIcon/>
                  <h1 className='text-xl font-bold'>HOME</h1>
                </div>
                <div className='h-[83vh]'>
                    <div className=''>
                    <SearchUser/>
                    </div>
                    <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
                     <UserChatCard/>
                    </div>
                </div>
               </div>
          </div>
          </Grid>
          <Grid className='h-full' item  xs ={9}>
                  <div>
                    <div className='flex justify-between items-center border-l p-5'>
                        <div className='flex items-center space-x-3'>
                            <Avatar src='https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                            <p>K4151r</p>
                        </div>
                        <div className='flex space-x-3'>
                              <IconButton>
                                   <CallOutlinedIcon/> 
                              </IconButton>
                              <IconButton>
                                    <VideocamOutlinedIcon/>
                              </IconButton>
                        </div>
                    </div>
                    <div className='hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5'>
                      <ChatMessage/>
                    </div>
                  </div>
                  <div className='sticky bottom-0  border-l'>
                        <div className='py-5 flex items-center justify-center space-x-5'>
                            <input className='bg-transparent border border-[#3b4054] rounded-full w-[90%] py-3 px-5' 
                            type="text"
                            placeholder='Type message' 
                            />
                       
                        <div>
                        <input type="file"
                        accept='image/*'
                        onChange={handleSelectImage}
                        style={{display:"none"}}
                        id='image-input'
                        />
                        <label htmlFor="image-input">
                          <IconButton color ="primary" component ="span">
                            <AddPhotoAlternateIcon/>
                          </IconButton>
                        </label>
                        </div>
                      </div>
                  </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Message
