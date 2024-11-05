import styled from "styled-components";

export const FooterCont = styled.footer`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        height: 80px;
        object-fit: cover;
        object-position: center;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 600;
    }

    p:hover {
        color: rgba(200,200,200,200)
    }

    @media only screen and (max-width: 1024px) {
        padding: 15px 5px;
        flex-direction: column;
        height: auto;
        gap: 20px;

        p {
            font-size: 24px;
        }
    }

    @media only screen and (max-width: 425px) {
        p {
            font-size: 18px;
        }
    }
`