import React,{useState} from 'react';
import { Button,TextField,Radio,FormControl,FormControlLabel,FormLabel,RadioGroup } from '@material-ui/core';
import {Formik,Form, ErrorMessage,Field,validateYupSchema} from 'formik'
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../Redux/Auth/auth_action';

const initialValues ={firstName:"",lastName:"",email:"",password:"",gender:""};
const validationSchema={email:Yup.string().email("Invalid Email").required("Email is Required"),
password:Yup.string().min(6,"Password must be atleast 6 characters").required("Password is Required")};


const Register = () => {

  const [gender, setGender] = React.useState('female');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit=(values)=>{
    values.gender = gender;
    console.log("Handle Submit ",values);
    dispatch(registerUserAction({data:values}))
  }
  return (
    <>
    <Formik 
      onSubmit={handleSubmit} 
     // validationSchema={validationSchema} 
      initialValues={initialValues}
      >
          <Form className ='space-y-5'>
            <div className="space-y-5">
              <div>
                <Field
                 as={TextField}
                 name="firstName"
                   placeholder="First Name"
                    type ="text" 
                    variant ="outlined" 
                    fullWidth/>

                   <ErrorMessage 
                   name="firstName" 
                   component={"div"}
                    className='text-red-500'
                    />
              </div>
              <div>
                <Field
                 as={TextField}
                  name="lastName"
                   placeholder="LastName"
                    type ="text" 
                    variant ="outlined" 
                    fullWidth/>

                   <ErrorMessage 
                   name="lastName"
                    component={"div"}
                     className='text-red-500'
                     />
              </div>
              <div>
                <Field
                 as={TextField}
                 name="email"
                   placeholder="Email"
                    type ="email" 
                    variant ="outlined" 
                    fullWidth/>

                   <ErrorMessage 
                   name="email" 
                   component={"div"}
                    className='text-red-500'
                    />
              </div>
              <div>
                <Field
                 as={TextField}
                  name="password"
                   placeholder="Password"
                    type ="password" 
                    variant ="outlined" 
                    fullWidth/>

                   <ErrorMessage 
                   name="password"
                    component={"div"}
                     className='text-red-500'
                     />
              <FormControl>
                 <FormLabel className='mt-6' id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                       <RadioGroup
                                 row
                                 aria-labelledby="demo-row-radio-buttons-group-label"
                                 onChange={handleChange}
                                 >
                       <FormControlLabel value="female" control={<Radio />} label="Female" />
                       <FormControlLabel value="male" control={<Radio />} label="Male" />
                   </RadioGroup>
              </FormControl>
          </div>
        </div>
                <Button 
                sx = {{padding:"0.8rem 0rem"}}
                fullWidth 
                type="submit" 
                variant="contained" 
                color="primary" 
                >Register
                 </Button>
          </Form>
      </Formik>
      <div className='flex gap-2 items-center jsutify-center pt-5'>
        <p>Already have an account </p>
        <Button onClick={()=>navigate("/login")} >Login</Button>
      </div>
      </>
  )
}

export default Register
