
import "./NavBarStyles.css"
import { Link } from 'react-scroll';
import Br from "../../assets/brasil.png"
import Eua from "../../assets/estados-unidos.png"
export default function NavBarComponent() {

    return (
        <nav className='header' id="navbarContainer">
            <div id="boxLogo">
                <div className="testlogo"></div>
            </div>
            <ul id="boxScreens">
                <li className='boxTextNav'>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="textNav">
                        HOME
                    </Link>
                </li>
                <li className='boxTextNav'>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500}className="textNav">
                        ABOUT
                    </Link>
                </li>
                <li className='boxTextNav'>
                    <Link to="project" spy={true} smooth={true} offset={0} duration={500}className="textNav">
                        PROJETOS
                    </Link>
                </li>
                <li className='boxTextNav'>
                    <Link to="contact" spy={true} smooth={true} offset={-10} duration={500}className="textNav">
                        CONTATO
                    </Link>
                </li>
            </ul>
            <div id="boxIdioma">
                <span className="ItemIdioma">
                    <img src={Br} alt="" />
                </span>
                <span className="ItemIdioma">
                    <img src={Eua} alt="" />
                </span>
            </div>
        </nav>
    )
}
