import styles from '../styles/AppTitle.module.css';

export default function AppTitle({ className }) {
  return <h1 className={`${styles.title} ${className}`}>Mediary</h1>;
}