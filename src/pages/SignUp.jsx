
import '../styles/Forms.css';
import { Link } from 'react-router-dom'

import AppTitle from '../components/AppTitle';
import { SignUpForm } from '../components/SignUpForm';

export function SignUp(){

    return(
        <div className='container'>
            <AppTitle />
                <h2>Create a new account</h2>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            <SignUpForm />

        </div>
    );
}

