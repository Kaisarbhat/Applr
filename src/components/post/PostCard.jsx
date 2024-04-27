import React, { useState } from 'react'
import {red} from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/Chat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Card,CardHeader,Avatar,IconButton,CardMedia,CardActions,CardContent,Typography} from '@material-ui/core';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction, likePostAction } from './../../Redux/Post/post_action';
import { isLikedByReqUser } from '../../util/isLikedByReqUser';
const PostCard = ({item}) => {
  const dispatch = useDispatch();
  const {post,auth} = useSelector(store => store);
  const [showComments,setShowComments] = useState(false);
  const handleShowComment =() =>{
    setShowComments(!showComments);
  }
    const handleCreateComment = (content) =>{
      const reqData = {
            postId:item.id,
            data :{
              content
            }
      }
      dispatch(createCommentAction(reqData))
    };

  const handleLikePost = () =>{
    dispatch(likePostAction(item.id))
  }
  return (
    <Card className=''>
       <CardHeader
        avatar={
          <Avatar style={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName+ " "+ item.user.lastName}
        subheader={"@"+item.user.firstName.toLowerCase()+ "_"+ item.user.lastName.toLowerCase()}
      />
       <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' disableSpacing>
        <div>
           <IconButton onClick={handleLikePost}>
                {isLikedByReqUser(auth.user.id ,item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton> 
           <IconButton>
                {<ShareIcon/>}
            </IconButton> 
           <IconButton>
                {<ChatBubbleIcon onClick={handleShowComment}/>}
            </IconButton> 

        </div>
            <IconButton>
                {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
            </IconButton>
      </CardActions>
      {showComments &&  <section>
        <div className='flex items-center space-x-5 mx-3 my-5'>
          <Avatar sx= {{}}/>
          <input 
          onKeyPress={(e)=>{
            if(e.key === "Enter"){
              handleCreateComment(e.target.value);
              console.log("Enter pressed",e.target.value);
            }
          }}
          className='w-full outline-none bg-transparent border border-[#3b4050] rounded-full px-5 py-2 '
          placeholder ="Write comments"
          type="text" />
        </div>
        <Divider/>
        <div className='mx-3 spce-y-2 my-5 text-xs'>
              {item.comments?.map((comment) =>  <div className='flex items-center space-x-5 mt-2'>
                  <Avatar style={{height:"2rem",width:"2rem",fontSize:".8rem"}}>
                     {comment.user.firstName[0]}
                  </Avatar>
                  <p>{comment.content}</p>
              </div>
              )};
        </div>
      </section>}
    </Card>
  )
}

export default PostCard
