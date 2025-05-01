import { Link } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { Card } from "../components/Card";
import { FaBook, FaFilm, FaMusic } from 'react-icons/fa';

export function Home() {
    return (
        <div>
            <Navbar />
            <p>Keep track of all your favorite movies, books, and TV shows in one intuitive platform.</p>
            <h2>Ready to organize your collection?</h2>
            <Link to="/signup">Create a new account</Link>

            <Card title="Books" icon={<FaBook />} />
            <Card title="Movies" icon={<FaFilm />} />
            <Card title="Music" icon={<FaMusic />} />
        </div>
    );
}
