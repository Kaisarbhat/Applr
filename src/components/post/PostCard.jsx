import React from 'react'
import {red} from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/Chat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Card,CardHeader,Avatar,IconButton,CardMedia,CardActions,CardContent,Typography} from '@material-ui/core';
const PostCard = () => {
  return (
    <Card className=''>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Full name"
        subheader="@username"
      />
       <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' disableSpacing>
        <div>
           <IconButton>
                {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton> 
           <IconButton>
                {<ShareIcon/>}
            </IconButton> 
           <IconButton>
                {<ChatBubbleIcon/>}
            </IconButton> 

        </div>
            <IconButton>
                {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
            </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
