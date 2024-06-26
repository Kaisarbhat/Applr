import React from 'react'
import {red} from '@mui/material/colors'
import {CardHeader ,IconButton,Avatar,Button} from '@material-ui/core'
const PopularUserCard = () => {
  return (
    <div className=''>
        <CardHeader style={{color:"rgb(88,199,250)"}}
        avatar={
          <Avatar aria-label="recipe">
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
