import { Avatar, Card, CardHeader, IconButton } from '@material-ui/core'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from 'react-redux';
const UserChatCard = ({chat}) => {

  const {message,auth} = useSelector((store)=>store);
  return (
    <Card>
        <CardHeader
      avatar = {
        <Avatar style = {{width:"3.5rem",
     height:"3.5rem",fontSize:"1.5rem", bgcolor:"#191c29", color:"rgb(88,199,250)" }}src='https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
     }
     action={
        <IconButton>
            <MoreHorizIcon/>
        </IconButton>
     }
     title ="k4151r"
     subheader="inzoo"
    //  title = {auth?.user.id === chat.users[0].id ? chat.users[1].firstName+" "+chat.users[1].lastName : chat.users[0].firstName+" "+chat.users[0].lastName }
    //  subheader={"message"}
     >
      
    </CardHeader>
    </Card>
  )
}

export default UserChatCard
