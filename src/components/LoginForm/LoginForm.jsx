import { Formik} from 'formik';
import * as Yup from 'yup';
import {NavForm, Label, ErrMessage, Btn, Title, AuthForm, Input, OpenEye, CloseEye, EyesBtn, TitleForm} from './LoginForm.styled';

import  { useState } from 'react';

const formSchema = Yup.object().shape({
   email: Yup.string('Enter your email')
    .email('Enter a valid email')
     .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Enter the correct password')
 })

export const LoginForm = ({handleSubmit}) => {
  const [showPassword, setShowPassword] = useState(false); 

    const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

 
  return (
       <>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={formSchema}  
 
    onSubmit={(values, actions) => {
      handleSubmit(values)
      console.log(values);
      actions.resetForm();        
      }} 
      >
      {({errors, touched})=>(
        <AuthForm>
           <TitleForm>Sing In</TitleForm>
      <Label htmlFor="email"><Title>Enter your email</Title>
              <Input  $error={errors.email && touched.email}
                name="email" placeholder="E-mail" />
          <ErrMessage name="email" component="div" $error={errors.email && touched.email} />
      </Label>
      <Label htmlFor="password"><Title>Enter your password</Title>
            <Input $error={errors.password && touched.password}
                type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" />
            <span onClick={togglePassword}>  {showPassword ? <EyesBtn>{<CloseEye />}</EyesBtn> : <EyesBtn>{<OpenEye/> }</EyesBtn>}
          </span>
          <ErrMessage name="password" component="div" $error={errors.password && touched.password} />
           </Label>
    <Btn  type="submit">SingIn</Btn>
          </AuthForm>
        )}
      </Formik>
      <NavForm to='/registration'>SingUp</NavForm>
      </>
     )
}