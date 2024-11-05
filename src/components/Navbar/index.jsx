import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

import { Navcontent, Navclick, Logo } from './styles';

import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


export const Navbar = () => {
    return (
        <Navcontent>
            <Logo>
                <Link to='/'><img src="./src/assets/img/logo.png" alt="logo"/></Link>
            </Logo>
            <Link to='/' className='link-router'>
                <Navclick className='nomobile'>Início</Navclick>
            </Link>
            <ScrollLink to='agency-scroll' smooth={true} duration={300} className='link-router'>
                <Navclick className='nomobile'>Agência</Navclick>
            </ScrollLink>
            <Link to='/cursos' className='link-router'>
                <Navclick>Cursos</Navclick>
            </Link>
            <Link to='https://wa.me/+5537991023613' className='link-router' target="_blank">
                <Navclick className='nomobile'><IoLogoWhatsapp size={25} />(37) 9102-3616</Navclick>
            </Link>
            <Link to='mailto:contatosantosagencia@gmail.com'>
                <Navclick className='nomobile' id='noemail'>
                    <IoIosMail size={35}/>contatosantosagencia@gmail.com
                </Navclick>
            </Link>
        </Navcontent>
    )
}