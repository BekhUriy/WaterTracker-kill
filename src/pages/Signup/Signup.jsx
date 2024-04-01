 import {RegisterForm} from "../../components/RegisterForm/RegisterForm";
import { useDispatch } from 'react-redux';
import { signUpThunk} from "../../redux/auth/thunk";
import { Container, Bottle, FormWraper, Wraper } from './Signup.styled';


const SignUpPage = () => {
    const dispatch = useDispatch();
    const handleSubmit = ({ email, password }) => {
        console.log(email); 
        dispatch(signUpThunk({ email, password }))
    }
    return (
     <Container>
            <Wraper>
            <Bottle />  
                <FormWraper><RegisterForm handleSubmit={handleSubmit} /></FormWraper>
            </Wraper>    
        </Container> 
                
   
  )
}
export default SignUpPage;