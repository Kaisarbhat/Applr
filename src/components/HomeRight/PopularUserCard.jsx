import React from 'react'
import {red} from '@mui/material/colors'
import {CardHeader ,IconButton,Avatar,Button} from '@material-ui/core'
const PopularUserCard = () => {
  return (
    <div className=''>
        <CardHeader
        avatar={
          <Avatar Style={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Button color='primary' size='small'>
                Follow
            </Button>
          </IconButton>
        }
        title="name"
        subheader="@username"
      />
    </div>
  )
}

export default PopularUserCard
