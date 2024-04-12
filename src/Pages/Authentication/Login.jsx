import React,{useState} from 'react';
import { Button,TextField } from '@material-ui/core';
import {Formik,Form,Field, ErrorMessage,validateYupSchema} from 'formik'
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
const initialValues ={email:"",password:""};
const validationSchema={email:Yup.string().email("Invalid Email").required("Email is Required"),
password:Yup.string().min(6,"Password must be atleast 6 characters").required("Password is Required")};
const Login = () => {
  const[formValue,setFormValue] = useState();
  //const dispatch =  useDispatch();
  const navigate = useNavigate();


  const handleSubmit=(values)=>{
    console.log("Handle Submit ",values);
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
              </div>
            </div>
                <Button 
                sx = {{padding:"0.8rem 0rem"}}
                 fullWidth type="submit" 
                 variant="contained" 
                 color="primary" 
                 >Login
                 </Button>
          </Form>
      </Formik>
      <div className='flex gap-2 items-center jsutify-center pt-5'>
        <p>Don't have an account ?</p>
        <Button onClick={()=>navigate("/register")} >Register</Button>
      </div>
    </>
  )
}

export default Login
