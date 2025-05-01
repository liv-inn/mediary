import AppTitle from './AppTitle';
import { Link } from 'react-router-dom';

export function Navbar(){

    return(
        <div>
        <AppTitle />

        <Link to="/login">Entrar</Link>
        </div>

    )
}