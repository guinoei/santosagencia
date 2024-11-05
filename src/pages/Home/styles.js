import styled from "styled-components";

import bannercar from "../../assets/img/bannercar.png"



export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 425px) {
        padding: 0 10px;
    }
`

export const Inicio = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    background-image: linear-gradient(65deg, #540975, rgba(20,20,20,20));

    @media only screen and (max-width: 425px) {
        flex-direction: column;
        height: auto;
        width: 100%;
        padding: 10px;
    }
`

export const Content = styled.div`
    gap: 50px;
    padding: 0 35px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    
    @media only screen and (max-width: 425px) {
        padding: 20px 0;
        justify-content: center;
    }
`

export const Media = styled.div`
        width: 1200px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;

    img {
        width: 1200px;
        height: 300px;
        object-fit: cover;
        object-position: center;
        border-radius: 30px;
        transition: .8s ease;
        mask:
        linear-gradient(135deg, #000c 40%, #000, #000c 60%)
        100% 100%/
        240% 240%;
    }

    img:hover {
        transition: .4s ease;
        mask-position: 0 0;
    }

    @media only screen and (max-width: 1024px) {
        width: 100%;
        
            img {
                width: 100%;
            }
    }
`

export const Text = styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 28px;
        font-weight: 900;
    }

    h1 {
        font-size: 55px;
    }

    p {
        font-size: 22px;
    }

    @media only screen and (max-width: 425px) {
        gap: 10px;
            h1 {
                font-size: 30px;
            }

            h2 {
                font-size: 18px;
            }

            p {
                text-align: center;
            }
    }
`

export const Contact = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        font-weight: 700;
        padding: 15px;
        border-radius: 15px;
        background: whitesmoke;
        color: black;
    }

    p:hover {
        color: #540975;
    }
`

export const Agencia = styled.div`
    width: 100%;
    gap: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    p {
        font-size: 25px;
        font-weight: 600;
    }

    h2 {
        font-size: 38px;
        font-weight: 600;
    }

    @media only screen and (max-width: 1024px) {
        gap: 10px;

        p {
            text-align: center;
        }

        h2 {
            text-align: center;
        }
    }

    @media only screen and (max-width: 425px) {

        p {
            font-size: 22px;
        }

        h2 {
            font-size: 32px;
        }
    }
`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 960px;
    border-radius: 50px;
    box-shadow: 2px 2px 2px black;
    padding: 10px;
    background-image: linear-gradient(135deg, #540975, rgba(30,30,30,30));

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        width: 100%;
    }
`

export const Pic = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    border-radius: 200px;
    border: 2px solid black;

    img {
        height: 350px;
        object-fit: cover;
        object-position: center;
        border-radius: 200px;
        mask:
        linear-gradient(135deg, #000c 40%, #000, #000c 60%)
        100% 100%/
        240% 240%;
        transition: .8s ease;
    }

    img:hover {
        mask-position: 0 0;
        transition: .5s ease;
    }

    @media only screen and (max-width: 425px) {
        height: 300px;

            img {
                height: 300px;
            }
    }
`

export const BannerDesc = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 400px;
    gap: 40px;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-style: italic;
        letter-spacing: 1px;
        gap: 5px;
    }

    p:hover {
        text-decoration: underline;
    }
`

export const DescTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    h1 {
        font-size: 50px;
    }
`

export const DescContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: 28px;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 425px) {
            h2 {
                font-size: 19px;
                text-align: center;
            }
    }
`

export const Services = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 15px;
        gap: 50px;
        width: 310px;
        height: 400px;
        border-radius: 30px;
        border: 1px solid black;
    }

    div h2 {
        text-align: center;
    }

    div p {
        font-size: 20px;
    }

    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        height: auto;
    }
`

export const Message = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 600;
        padding: 17px;
        border-radius: 15px;
        background: whitesmoke;
        color: black;
        border: 1px solid black;
        transition: .3s ease;
    }

    p:hover {
        color: #540975;
        transition: .1s ease;
    }

    @media only screen and (max-width: 425px) {
        padding: 15px;

            p {
                
                text-align: center;
            }
    }
`

export const Events = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 1200px;

    @media only screen and (max-width: 1024px) {
        padding: 0 5px;
        width: 100%;
    }
`

export const EventTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    p {
        font-size: 24px;
    }

    h1 {
        font-size: 55px;
    }

    @media only screen and (max-width: 1024px) {
        h1 {
            font-size: 38px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 425px) {
        p {
            font-size: 20px;
            text-align: center;
        }

        h1 {
            font-size: 22px;
            text-align: center;
        }
    }
`

export const BannerCar = styled.div`
    width: 1200px;
    height: 400px;
    border-radius: 30px;
    border: 1px solid black;
    background-image: url(${bannercar});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    transition: .8s ease;
    mask:
    linear-gradient(135deg, #000c 40%, #000, #000c 60%)
    100% 100%/
    240% 240%;

    &:hover {
        transition: .4s ease;
        mask-position: 0 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }

    h1 {
        font-size: 50px;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
        letter-spacing: 1px;
        gap: 5px;
    }

    p:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: 1024px) {
        width: 100%;
        padding: 0 5px;

        h2 {
            text-align: center;
        }
    }

    @media only screen and (max-width: 425px) {
        div {
            gap: 10px;
        }    

        h1 {
            font-size: 26px;
        }

        h2 {
            font-size: 20px;
            text-align: center;
        }
    }
`

export const CarPics = styled.div`
    width: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 400px;
        gap: 20px;
    }

    div img {
        width: 300px;
        height: 400px;
        object-fit: cover;
        
        object-position: center;
        border-radius: 20px;
        transition: .8s ease;
        mask:
        linear-gradient(135deg, #000c 40%, #000, #000c 60%)
        100% 100%/
        240% 240%;
    }

    div img:hover {
        transition: .4s ease;
        mask-position: 0 0;
    }

        @media only screen and (max-width: 1024px) {
            width: 100%;

                div {
                    flex-wrap: wrap;
                    width: 100%;
                    height: auto;
                }
        }
`

export const CourseSeg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        padding: 20px 0;
    }
    p {
        font-weight: 700;
        padding: 15px;
        border-radius: 15px;
        background: whitesmoke;
        color: black;
    }

    p:hover {
        color: #540975;
    }
`

export const CourseSegTitle = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1024px) {
            h1 {
                text-align: center;
            }

            h2 {
                text-align: center;
            }
    }

    @media only screen and (max-width: 425px) {
            h1 {
                font-size: 22px;
                text-align: center;
            }

            h2 {
                font-size: 20px;
                text-align: center;
            }
    }
`

export const CoursePics = styled.div`
    width: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
        width: 300px;
        height: 400px;
        object-fit: cover;
        object-position: center;
        border-radius: 20px;
        transition: .8s ease;
        mask:
        linear-gradient(135deg, #000c 40%, #000, #000c 60%)
        100% 100%/
        240% 240%;
    }

    img:hover {
        transition: .4s ease;
        mask-position: 0 0;
    }

    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        width: 100%;
    }
`