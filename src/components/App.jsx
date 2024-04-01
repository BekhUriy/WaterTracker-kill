import { Route, Routes } from 'react-router-dom';
// import { AppWrapper } from './App.styled';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/Home/Home';
import WelcomePage from '../pages/Welcome/Welcome';
import {PrivateRoute} from "../guards/PrivateRoute";
import {PublicRoute} from "../guards/PublicRoute";
import SignUpPage from '../pages/Signup/Signup';
import SignInPage from '../pages/Singin/Singin';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test);

  // const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<WelcomePage />} /> */}
        <Route
          index
          element={
            <PublicRoute redirectTo="/home" component={<WelcomePage />}  />
          }
        />
        <Route
          path="home"
          element=
          {<PrivateRoute redirectTo={'/'} component={<HomePage />}/>}
          // {<PublicRoute redirectTo={'/home'} component={<HomePage />}/>}

        />
         <Route
          path="signup"
          element={
            <PublicRoute component={<SignUpPage />} redirectTo="/home" />
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute component={<SignInPage />} redirectTo="/home" />
          }
        />
       
        <Route path="*" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
