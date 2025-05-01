import  AppTitle  from '../components/AppTitle'
import { LoginForm } from '../components/LoginForm';
export function Login(){
    return(
        <div className='container'>
            <AppTitle />
            <h2>Sign in to your account</h2>
            <p>Or <a href="./SignUp.jsx">create a new account</a></p>
            <LoginForm />
        </div>
        
    );
}