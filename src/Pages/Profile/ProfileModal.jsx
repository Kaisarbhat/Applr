import * as React from 'react';
import Box from '@mui/material/Box';
import {Avatar,Button} from '@mui/material';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateProfileAction } from '../../Redux/Auth/auth_action';
import { IconButton, TextField } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline:"none",
  overFlow:"scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({open ,handleClose}) {
  const dispatch = useDispatch();
  
  const handleSubmit=(values)=>{
    console.log("Values ",values);
    formik.handleSubmit(values);
    handleClose();
  }
  
  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:""
    },
    onSubmit:(values,)=>{
      console.log("Values ",values)
      dispatch(updateProfileAction(values))
    },
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
              <div className="flex items-center justify-between"> 
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose}>
                      <CloseIcon/>
                </IconButton>
                <p>Edit Profile</p>

              </div>
                <Button type="submit" onClick={handleSubmit}>Save</Button>
              </div>
              <div>
              <div className='h-[15rem]'>
                  <img className='w-full h-full rounded-t-md'
                   src="https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='pl-5'>
                    <Avatar 
                     className='transform -translate-y-24'
                     style={{ width: "10rem", height: "10rem" }}
                     src = 'https://lh3.googleusercontent.com/a/ACg8ocINlWPUAMMg3z3xCArGQn4BIEvsxrqFzMRbtHMzHarEXmvx4o8=s96-c-rg-br100'
                     alt='Profile'
                     />

                </div>
              </div>
              <div className='space-y-3 mb-5'>
              <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
                <TextField
                fullWidth
                id="outlined-helperText"
                name ="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                />
                <TextField
                fullWidth
                id ="lastName"
                name ="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                />

              </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
