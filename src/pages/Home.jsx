import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { FaBook, FaFilm, FaMusic } from 'react-icons/fa';
import homeStyles from '../styles/Home.module.css'


export function Home() {
    return (
        <div className={homeStyles.container}>
            <Header />
            <p className={homeStyles.p}>Keep track of all your favorite movies, books, and TV shows in one intuitive platform.</p>
            <h2 className={homeStyles.h2}>Ready to organize your collection?</h2>
            <Link className={homeStyles.link} to="/signup">Create a new account</Link>

<div className={homeStyles.containerCard}>
            <Card className={homeStyles.card} title="Books" icon={<FaBook />} />
            <Card className={homeStyles.card} title="Movies" icon={<FaFilm />} />
            <Card className={homeStyles.card} title="Music" icon={<FaMusic />} />
</div>
        </div>
    );
}
