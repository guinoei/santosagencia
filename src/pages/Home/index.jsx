
import { Link } from "react-router-dom"


import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { Container, Main, Inicio, Content, Text, Contact, Media, Agencia, Title, Banner, Pic, BannerDesc, DescTitle, DescContent, Services, Message, Events, EventTitle, BannerCar, CourseSeg, CourseSegTitle, CarPics, CoursePics } from './styles'



export const Home = () => {

    return (
        <Container>
            <Navbar />
            <Main>
                <Inicio>
                    <Content>
                        <Text>
                            <h2>DE NOVA SERRANA PARA O MUNDO</h2>
                            <h1>ELEVANDO O NÍVEL DE SUA EMPRESA</h1>
                            <p>Aplicando e desenvolvendo o conteúdo certo pra você!</p>
                        </Text>
                        <Contact>
                            <Link to='https://wa.me/+5537991023613' target="_blank">
                                <p>ENTRE EM CONTATO</p>
                            </Link>
                        </Contact>
                    </Content>
                    <Media>
                        <img src="./src/assets/img/mediabanner.jpg" />
                    </Media>
                </Inicio>
                <Agencia id='agency-scroll'>
                    <Title>
                        <p>Com mais de 8 anos criando diversos conteúdos para as redes sociais.</p>
                        <h2>Nossa agência entende o que é melhor pra você!</h2>
                    </Title>
                    <Banner>
                        <Pic>
                            <Link to='https://linktr.ee/santosagencia' target="_blank"><img src="./src/assets/img/bannerpic.png" alt="Igor Lucas" /></Link>
                        </Pic>
                        <BannerDesc>
                            <DescTitle>
                                <h1>Iguinho NS</h1>
                                <Link to='https://youtube.com/@iguinhonsoficial' target="_blank">
                                    <p><FaYoutube size={35} /> @iguinhonsoficial</p>
                                </Link>
                                <Link to='https://www.instagram.com/iguinho_ns_oficial/' target="_blank">
                                    <p><FaInstagramSquare size={35} /> @iguinho_ns_oficial</p>
                                </Link>
                            </DescTitle>
                            <DescContent>
                                <h2>+ de 400 vídeos</h2>
                                <h2>+ de 16 mil inscritos</h2>
                                <h2>+ de 7,5 milhões de visualizações</h2>
                            </DescContent>
                        </BannerDesc>
                    </Banner>
                    <Services>
                        <div className="manage">
                            <h2>Deseja alcançar mais pessoas através das redes sociais?</h2>
                            <p>Com o Tráfego Pago você consegue atingir o seu público alvo em todas as plataformas.</p>
                        </div>
                        <div className="brand">
                            <h2>Precisando de ideias para a criação de sua Marca?</h2>
                            <p>O estilo e a modernização de seu Logo são muito importantes para a sua Marca ser lembrada.</p>
                        </div>
                        <div className="web">
                            <h2>Pensando em ter um site?</h2>
                            <p>Um ambiente que seja especialmente criado, desenvolvido e pensado para a sua Marca.</p>
                        </div>
                        <div className="editing">
                            <h2>Buscando gravações e edições de conteúdos de qualidade?</h2>
                            <p>Vídeos editados pensando em sua Marca, impactam exponencialmente seu crescimento.</p>
                        </div>
                    </Services>
                    <Message>
                        <Link to='https://wa.me/+5537991023613' target="_blank">
                            <p>Entre em contato e faça seu orçamento agora mesmo!</p>
                        </Link>
                    </Message>
                    <Events>
                        <EventTitle>
                            <p>Em nossa tragetória de desenvolvimento de conteúdo ao longo dos anos, entramos em diversos universos e diferentes áreas. Uma dessas áreas que temos um apreço e um cuidado especial é a área automotiva.</p>
                            <BannerCar>
                                <div>
                                    <h1>Quer ter uma cobertura especial do seu Evento?</h1>
                                    <h2>Produzimos vídeos exclusivos e conteúdos de qualidade, focados no seu Evento.</h2>
                                </div>
                                <Link to='https://www.instagram.com/nsbaixosoficial/' target="_blank">
                                    <p><FaInstagramSquare size={35} /> @nsbaixosoficial</p>
                                </Link>
                                <Link to='https://wa.me/+5537991023613' target="_blank">
                                    <p>Agende agora mesmo!</p>
                                </Link>
                            </BannerCar>
                            <h1>Fazemos parte do universo automotivo.</h1>
                        </EventTitle>
                    </Events>
                    <CarPics>
                        <div>
                            <img className="carpic1" src="./src/assets/img/carpic1.jpeg" alt="carpic1"/>
                            <img className="carpic2" src="./src/assets/img/carpic2.jpeg" alt="carpic2"/>
                            <img className="carpic3" src="./src/assets/img/carpic3.jpeg" alt="carpic3"/>
                        </div>
                    </CarPics>
                    <CourseSeg>
                        <CourseSegTitle>
                            <h1>Mas se o assunto é Estética Automotiva:</h1>
                            <h2>Interessado em saber como funciona e quais são os primeiros passos para ter uma de sucesso? Confira nosso curso!</h2>
                        </CourseSegTitle>
                        <CoursePics>
                            <img className="coursepic1" src="./src/assets/img/coursepic1.jpeg" alt="coursepic1"/>
                            <img className="coursepic2" src="./src/assets/img/coursepic2.jpeg" alt="coursepic2"/>
                            <img className="coursepic3" src="./src/assets/img/coursepic3.jpeg" alt="coursepic3"/>
                        </CoursePics>
                        <div>
                            <Link to='/cursos'>
                                <p>SABER MAIS</p>
                            </Link>
                        </div>
                    </CourseSeg>
                </Agencia>
            </Main>
            <Footer />
        </Container>
    )
}