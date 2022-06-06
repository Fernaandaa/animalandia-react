import './Nav.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to={'/Home'} ><a className="link-h link">Inicio</a></Link>
            <Link to={'/Home'} ><a className="link-h link" >Equipo</a></Link>
            <Link to={'/Home'} ><a className="link-h link" >Servicios</a></Link>
            <Link to={'/Dogs'}><a className="link-d link">Perros</a></Link>
            <Link to={'/Home'} ><a className="link-h link" >Agenda tu cita</a></Link>
            <Link to={'/Home'} ><a className="link-h link" >Contáctanos</a></Link>
        </nav>
    );
}


export default Navbar;