import React from 'react'
import { navigationMenu } from './SidebarNavigation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Divider,Avatar,Button,Menu,MenuItem,Card} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {auth} = useSelector(store=>store);
  const navigate = useNavigate();
  
  const handleNavigate = (item)=>{
    if(item.title === "Profile"){
      navigate(`/profile/${auth?.user.id}`)
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Card className='card h-screen flex flex-col justify-between py-5'>
      <div className='space-y-8 pl-5'>

        <div className=''>
            <span className='logo font-bold text-xl'> Applr</span>
        </div>
        <div className='space-y-8'>
          {navigationMenu.map((item)=>(
          <div onClick={()=>handleNavigate(item)} className='cursor-pointer flex space-x-3 '>
            {item.icon}
            <p className='text-xl'> {item.title}</p>
         </div>) )}

        </div>

      </div>
      <div>
        <Divider />
        <div className='pl-5 flex items-center justify-between pt-5'>
            <div className='flex items-center space-x-3'>
                <Avatar  src=''/>
                <div>
                  <p className='font-bold'>{auth?.user.firstName + " " +auth?.user.lastName}</p>
                  <p className='opacity-70'>@{auth?.user.firstName.toLowerCase()+ "_" +auth?.user.lastName.toLowerCase()}</p>
                </div>
            </div>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            
        </div>
      </div>
    </Card>
  )
}

export default Sidebar
