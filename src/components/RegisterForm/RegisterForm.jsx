import { Formik} from 'formik';
import {NavForm, Label, Btn, Title,AuthForm, Input, OpenEye, CloseEye, EyesBtn, ErrMessage, TitleForm} from '../LoginForm/LoginForm.styled';
import * as Yup from 'yup';

import  { useState } from 'react';




const validationSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
     .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Your password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Enter the correct password!')
    .required('Confirm password is reqired!'),
});

 export const RegisterForm = ({handleSubmit}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };


  return (
    <>
  <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
 
        onSubmit={(values, actions) => {
          if (values.password === values.confirmPassword) {
            handleSubmit(values)
            console.log(values);
            actions.resetForm()
          }
        }
        }>
        {({ errors, touched }) => (
          <AuthForm>
            <TitleForm>Sing Up</TitleForm>
            <Label htmlFor="email"><Title>Enter your email</Title>
              <Input name="email" placeholder="E-mail"  $error={errors.email && touched.email} />
              <ErrMessage name="email" component="div" $error={errors.email && touched.email}  />
            </Label>
            <Label htmlFor="password"><Title>Enter your password</Title>
              <Input   $error={errors.password && touched.password}
                type={showPassword ? 'text' : 'password'} name="password" placeholder="Password"
              />
              <span onClick={togglePassword}>
                {showPassword ? <EyesBtn>{<CloseEye />}</EyesBtn> : <EyesBtn>{<OpenEye />}</EyesBtn>}
              </span>
          
              <ErrMessage name="password" component="div" $error={errors.password && touched.password} />
            </Label>
            <Label htmlFor="confirmPassword"><Title>Repeat Password</Title>
              <Input $error={errors.confirmPassword && touched.confirmPassword}
                type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Repeat password" />
              <span onClick={toggleConfirmPassword}>
                {showConfirmPassword ? <EyesBtn>{<CloseEye />}</EyesBtn> : <EyesBtn>{<OpenEye />}</EyesBtn>}
              </span>
              <ErrMessage name="confirmPassword" component="div" $error={errors.confirmPassword && touched.confirmPassword} />
            </Label>
            <Btn type="submit">SingUp</Btn>
          </AuthForm>
        )}
      </Formik>
      <NavForm to='/login'>SingIn</NavForm>
      </>
  )
  
}