import styled from "styled-components";

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

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        gap: 50px;
    }

`

export const HeaderTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    gap: 10px;

    @media only screen and (max-width: 1024px) {
        margin-top: 50px;
        padding: 0 10px;
        gap: 50px;

        p, h1, h2 {
            text-align: center;
        }
    }
`

export const Video = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding: 70px;
    background-image: linear-gradient(65deg, #540975, rgba(20,20,20,20));

    @media only screen and (max-width: 1024px) {
        gap: 50px;
        padding: 30px;

        iframe {
            width: 100%;
            height: auto;
        }
    }
`