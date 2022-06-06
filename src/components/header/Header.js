import './Header.css'
import logo from '../../img/imgs/logo.jpg'
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";


function Header() {

    return (
        <header>
            <div className='contain-logo'>
            <Link to={'/Home'}><div class="c-logo"> <img src={logo} className="logo" /></div></Link>
            </div>
            <div class="buttons">
                <button id="ingresar" class="btn-blue">Ingresar <AiOutlineLogin /></button>
                <button class="btn-purple">Registrar <BsFillPersonPlusFill /> </button>
            </div>
        </header>
    );
}

export default Header;

// ow align-items-center justify-content-between text-center pb-3