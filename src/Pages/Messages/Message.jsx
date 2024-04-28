import { Grid,Backdrop,CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar,IconButton } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SearchUser from './../../components/SearchUser/SearchUser';
import UserChatCard from '../../components/SearchUser/UserChatCard';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, getAllChats } from '../../Redux/Message/message_action';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { uploadToCloudinary } from './../../util/uploadtoCloudinary';


const Message = () => {
  const {message,auth} = useSelector((store)=>store);
  const dispatch = useDispatch();
  const [currentChat,setCurrentChat] = useState();
  const [messages,setMessages] = useState([]);
  const [selectedImage,setSelectedImage] = useState();
  const [loading,setLoading] = useState(false);

  useEffect (()=>{
    dispatch(getAllChats())
  },[])
 
  console.log("Current chat __", currentChat ? messages : "currentChat is undefined");
  const handleSelectImage = async(e) =>{
    setLoading(true);
    console.log("handle select image");
    const imageUrl = await uploadToCloudinary(e.target.files[0],"image");
    setSelectedImage(imageUrl);
    setLoading(false);
  }

  const handleCreateMessage = (value) => {
    console.log("currentChat:", currentChat);
    if (!currentChat) {
      console.error("currentChat is undefined");
      return;
    }
  
    const message = {
      chatId: currentChat?.id,
      content: value,
      image: selectedImage
    };
    dispatch(createMessage(message));
  };
    useEffect(()=>{
      setMessages([...messages,message.message]);
    },[message.message])
  
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
                     
                     {message.chats.map((item)=>{
                       return <div onClick={()=>{
                         setCurrentChat(item);
                         setMessages(item.messages);
                        }}>
                          <UserChatCard chat = {item}/>
                       </div>
                     })}
                    </div>
                </div>
               </div>
          </div>
          </Grid>
          <Grid className='h-full' item  xs ={9}>
                  { currentChat ? <div>
                    <div className='flex justify-between items-center border-l p-5'>
                        <div className='flex items-center space-x-3'>
                            <Avatar src='https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                            <p>{auth?.user.id === currentChat.users[0].id ? currentChat.users[1].firstName+" "+currentChat.users[1].lastName : currentChat.users[0].firstName+" "+currentChat.users[0].lastName }</p>
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
                      {messages.map((item)=><ChatMessage item = {item}/>)}
                    </div>

                  <div className='sticky bottom-0  border-l'>
                          {selectedImage && <img className='w-[5rem] h-[5rem] object-cover px-2' src={selectedImage} alt="" />}
                        <div className='py-5 flex items-center justify-center space-x-5'>
                            <input 
                            onKeyPress={(e)=>{
                              if(e.key === "Enter" && e.target.value){
                                handleCreateMessage(e.target.value);
                                setSelectedImage("");
                              }
                            }}
                            className='bg-transparent border border-[#3b4054] rounded-full w-[90%] py-3 px-5' 
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
                  </div> : <div className='h-full space-y-5 flex flex-col justify-center items-center'>
                    <ChatBubbleOutlineIcon style={{fontSize:"15rem"}}/>
                      <p className='text-xl font-semibold'>No chat Selected</p>
                  </div> }
        </Grid>
      </Grid>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Message
