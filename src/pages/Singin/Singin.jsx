import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useDispatch } from 'react-redux';
import { loginThunk} from "../../redux/auth/thunk";
import { Container,Wraper,Bottle } from "../Signup/Signup.styled";
import { FormWraper } from "./Singin.styled";

const SignInPage = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = ({email,password}) => {
        dispatch(loginThunk({email,password}))
        
    }
    return (
        <Container>
            <Wraper>
            <Bottle />  
                <FormWraper> <LoginForm handleSubmit={handleSubmit} /></FormWraper>
            </Wraper>    
        </Container> 
        
    )
}
export default SignInPage;