import React from 'react';
import styled from 'styled-components';
import fundoImg from './assets/fundo.png';
import Logo from './assets/logo1.svg';
import Amil from './assets/convenios/amil.svg';
import Alice from './assets/convenios/alice.svg';
import Unimed from './assets/convenios/unimed.svg';
import Omint from './assets/convenios/omint.svg';
import Sami from './assets/convenios/sami.svg';
import Sulamerica from './assets/convenios/sulamerica.svg';
import Bradesco from './assets/convenios/bradesco.svg';
import Porto from './assets/convenios/porto.svg';
import Prevent from './assets/convenios/prevent.svg';
import Convs from './assets/convenios/convs.svg';
import instaIcon from './assets/instagram.svg';


// Container principal
const Container = styled.div`
  font-family: 'Playfair Display', serif;
  background-color: #fef9f6;
  background-image: url(${fundoImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 24px;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    background-image: none;
  }
`;


// Cabeçalho com logo principal
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 200px;
`;

// Seções do site com espaçamento adequado
const Section = styled.section`
  margin: 2rem auto;
  background: white;
  padding: 2rem clamp(1rem, 5vw, 4rem);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin-top: 0px;
`;

// Botão de CTA
const CTAButton = styled.a`
  background-color: #4CAF50;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 12px;
  width: fit-content;
  align-self: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

// Título das seções
const Title = styled.h2`
  color: #222;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

// Destaque em vermelho
const Highlight = styled.span`
  color: #b62020;
  font-weight: bold;
`;

// Grid de logos dos convênios
const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem auto;
  width: 100%;
  padding: 0 6vw;
  box-sizing: border-box;

  @media (max-width: 480px) {
    display: none;
  }
`;



// Card de cada convênio
const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Imagem de logo dos convênios
const ConvenioLogo = styled.img`
  max-width: 80px;
  height: auto;
`;

const ConveniosMobile = styled.img`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }
`;
const Footer = styled.footer`
  background-color: #1a1a1a; /* preto grafite */
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FooterText = styled.p`
  margin: 0;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ccc;
  }
`;




function App() {
  return (
    <Container>
      <Header>
        <LogoImg src={Logo} alt="Logo JD" />
      </Header>

      <Section>
        <Title>Reduza os custos do seu plano de saúde sem perder qualidade</Title>
        <p><Highlight>Como funciona?</Highlight></p>
        <ol>
          <li>Você nos envia seu plano atual e valor.</li>
          <li>Fazemos uma análise detalhada.</li>
          <li>Te mostramos opções equivalentes ou melhores por menos.</li>
        </ol>
        <CTAButton href="https://wa.me/5511914728467" target="_blank" rel="noopener noreferrer">Fale Conosco</CTAButton>
      </Section>

      <Section>
        <Title>O que nossos clientes dizem</Title>
          <p><em>"Consegui reduzir o valor em 30% com a mesma qualidade que tinha no plano anterior."</em><br/><strong>Paloma - São Paulo - SP</strong></p>
          <p><em>"Eu e meu marido fizemos um plano Sênior e tivemos uma ótima acessoria. A corretora nos auxilia até mesmo depois que fechamos o plano."</em><br/><strong>Edna - São Paulo - SP</strong></p>
          <p><em>"Fechamos um plano aqui na empresa, a corretora cuidou de toda a documentação e ainda cuida de toda a parte administrativa sem que eu precise mobilizar o meu RH."</em><br/><strong>Márcia - Gerente do Scada Café - SP</strong></p>
      </Section>
      
      <Section>
        <Title>Trabalhamos com os principais convênios:</Title>

        <LogosGrid>
          <Card><ConvenioLogo src={Amil} alt="Amil" /></Card>
          <Card><ConvenioLogo src={Alice} alt="ALICE" /></Card>
          <Card><ConvenioLogo src={Unimed} alt="Unimed" /></Card>
          <Card><ConvenioLogo src={Omint} alt="Omint" /></Card>
          <Card><ConvenioLogo src={Sami} alt="Sami" /></Card>
          <Card><ConvenioLogo src={Sulamerica} alt="Sulamerica" /></Card>
          <Card><ConvenioLogo src={Bradesco} alt="Bradesco" /></Card>
          <Card><ConvenioLogo src={Prevent} alt="Prevent" /></Card>
          <Card><ConvenioLogo src={Porto} alt="Porto" /></Card>

        </LogosGrid>

        <ConveniosMobile src={Convs} alt="Convenios" />


        <CTAButton href="https://wa.me/5511914728467" target="_blank" rel="noopener noreferrer">Fale Conosco</CTAButton>
      </Section>

      <Footer>
        <FooterText>© 2025 Jaque Diniz · Todos os direitos reservados</FooterText>
        <SocialLink href="https://www.instagram.com/jdinizconsultora?igsh=YXJ3amtkOGhobnl1" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" style={{ width: '20px', marginRight: '8px' }} />
          Instagram
        </SocialLink>
      </Footer>


        
    </Container>
  );
}

export default App;
