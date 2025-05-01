
import '../styles/Forms.css';

import AppTitle from '../components/AppTitle';
import { SignUpForm } from '../components/SignUpForm';

export function SignUp(){

    return(
        <div className='container'>
            <AppTitle />
                <h2>Create a new account</h2>
                <p>Already have an account? <a href='./Login.jsx'>Sign in</a></p>
            <SignUpForm />

        </div>
    );
}

