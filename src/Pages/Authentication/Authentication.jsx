import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import Login from './Login';
import image from '../Authentication/social-media1.png';
import Register from './Register';
import {Routes, Route} from 'react-router-dom';

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <img className="w-full h-full" src={image} alt="logo" />
        </Grid>
        <Grid item xs={4}>
          <div className=" flex justify-center items-center h-full">
            <div className="px-4 w-4/5">
              <Card className="card p-8 ">
                <Typography className='text-center' variant="h3" gutterBottom>
                  Applr
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                  Connecting You and Me
                </Typography>

                  <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                  </Routes>
                  
              </Card>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
