import  AppTitle  from '../components/AppTitle'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm';
export function Login(){
    return(
        <div className='container'>
            <AppTitle />
            <h2>Sign in to your account</h2>
            <p>Or <Link to="/signup">create a new account</Link></p>
            <LoginForm />
        </div>
        
    );
}