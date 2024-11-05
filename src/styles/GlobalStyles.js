import { createGlobalStyle } from 'styled-components'
import manage from "../assets/img/manage.png"
import web from "../assets/img/web.png"
import editing from "../assets/img/editing.png"
import brand from "../assets/img/brand.png"


export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;   
}

body {
    background-image: linear-gradient(65deg, #333333, rgba(20,20,20,20));    
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Albert Sans";
    scrollbar-width: none;
}

body::-webkit-scrollbar{
    display: none;
}

p, h1, h2 {
    color: white;
    user-select: none;
}

a {
    text-decoration: none;
}

.link-router{
    color: white;
    cursor: pointer;
}

.brand {
    background-image: url(${brand});
    transition: .8s ease;
    mask:
    linear-gradient(135deg, #000c 40%, #000, #000c 60%)
    100% 100%/
    240% 240%;
}

.web {
    background-image: url(${web});
    transition: .8s ease;
    mask:
    linear-gradient(135deg, #000c 40%, #000, #000c 60%)
    100% 100%/
    240% 240%;
}

.manage {
    background-image: url(${manage});
    transition: .8s ease;
    mask:
    linear-gradient(135deg, #000c 40%, #000, #000c 60%)
    100% 100%/
    240% 240%;
}

.editing {
    background-image: url(${editing});
    transition: .8s ease;
    mask:
    linear-gradient(135deg, #000c 40%, #000, #000c 60%)
    100% 100%/
    240% 240%;
}

.brand:hover, .web:hover, .manage:hover, .editing:hover {
    transform: perspective(800px) rotate3d(100, 0, 0, 15deg);
    transition: .4s ease;
    mask-position: 0 0;
}

.carpic1:hover {
    transform: scale(1.05) perspective(1500px) rotate3d(5, 10, 0, 5deg);
    
}
.carpic2:hover, .coursepic1:hover, .coursepic3:hover {
    transform: scale(1.05) perspective(1500px) rotate3d(100, 200, 20, -8deg);
}
.carpic3:hover, .coursepic2:hover {
    transform: scale(1.05) perspective(1500px) rotate3d(100, 20, 20, 8deg);
}

.carpic1 {
    object-position: right !important;
}

.carpic3 {
    object-position: left !important;
}

@media only screen and (max-width: 768px) {
    #noemail {
        display: none !important;
    }
    
}

@media only screen and (max-width: 425px) {
    .nomobile {
        display: none !important;
    }
    
}
`