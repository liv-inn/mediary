import  AppTitle  from '../components/AppTitle'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm';
import styles from '../styles/AuthPage.module.css';
export function Login(){
    return(
        <div className={styles.container}>
            <AppTitle />
            <h2>Sign in to your account</h2>
            <p>Or <Link className={styles.link} to="/signup">create a new account</Link></p>
            <LoginForm />
        </div>
        
    );
}