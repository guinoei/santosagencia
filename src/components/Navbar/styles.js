import styled from "styled-components";



export const Navcontent = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;


    @media only screen and (max-width: 1024px) {
        padding: 0 20px;
    }

    @media only screen and (max-width: 425px) {
        flex-direction: column;
        height: auto;
        gap: 5px;
        padding: 25px 15px;
    }
`

export const Navclick = styled.p`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: rgba(200,200,200,200)
    }

    @media only screen and (max-width: 1024px) {
        font-size: 16px;
    }
`

export const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
        height: 80px;
        object-fit: cover;
        object-position: center;
    }

    div {
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`