import AppTitle from './AppTitle';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'

export function Header() {
    return (
      <header className={styles.container}>
        <AppTitle className={styles.title} />
  
        <Link className={styles.link} to="/login">
          Login
        </Link>
      </header>
    );
  }