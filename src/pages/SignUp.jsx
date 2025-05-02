
import styles from '../styles/AuthPage.module.css';
import { Link } from 'react-router-dom'
import AppTitle from '../components/AppTitle';
import { SignUpForm } from '../components/SignUpForm';

export function SignUp(){

    return(
        <div className={styles.container}>
            <AppTitle />
                <h2 className={styles.h2}>Create a new account</h2>
                <p>Already have an account? <Link className={styles.link} to="/login">Sign in</Link></p>
            <SignUpForm />

        </div>
    );
}

