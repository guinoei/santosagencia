
import { Link } from "react-router-dom"


import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import { Container, Main, Content, HeaderTitle, Video} from './styles'

export const Courses = () => {

    return (
        <Container>
            <Navbar />
            <Main>
               <Content>
                <HeaderTitle>
                    <h1>Aqui somos apaixonados pelo mundo automotivo.</h1>
                    <h2>Confira um pouco de nossa jornada pelo mundo da Estética Automotiva com o primeiro episódio gratuito do nosso curso.</h2>
                    <p>Em breve lançamento do material completo!</p>
                </HeaderTitle>
                <Video>
                <iframe width="880" height="495" src="https://www.youtube.com/embed/-ckD-XZrmcM" title="COMO MONTAR SUA ESTÉTICA AUTOMOTIVA DO ZERO ✨ ESTÉTICA AUTOMOTIVA EMANUEL #detailing" frameborder="0" allow="web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>

                <iframe width="880" height="495" src="https://www.youtube.com/embed/iAmfE_qUubw" title="COMO FAZER POLIMENTO de FAROL | Estética Automotiva Emanuel ✨" frameborder="0" allow="web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </Video>
               </Content>
            </Main>
            <Footer />
        </Container>
    )
}