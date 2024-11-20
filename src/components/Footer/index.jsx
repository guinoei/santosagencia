import { Link } from "react-router-dom"

import { FooterCont } from "./styles"

import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import logo from "../../assets/img/logo.png"








export const Footer = () => {
    return (
        <FooterCont>
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <Link to='https://wa.me/+5537991023613' target="_blank">
                <p><IoLogoWhatsapp size={25}/>(37) 9102-3613</p>
            </Link>
            <Link to='mailto:contatosantosagencia@gmail.com'>
                <p><IoIosMail size={35}/>contatosantosagencia@gmail.com</p>
            </Link>
            <Link to='https://youtube.com/@iguinhonsoficial' target="_blank">
                <p><FaYoutube size={35}/></p>
            </Link>
            <Link to='https://www.instagram.com/santosagencians/' target="_blank">
                <p><FaInstagramSquare size={35}/></p>
            </Link>
        </FooterCont>
    )
}
