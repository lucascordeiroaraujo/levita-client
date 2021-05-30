import React from 'react';

import { Container } from '~/public/styles/global';

import {
  AboutContainer,
  TitleContainer,
  ImageDescriptionContainer,
  TechnologyContainer,
} from './style';

const About = () => (
  <Container fullContainer id="sobre-a-empresa">
    <AboutContainer>
      <TitleContainer>
        <h1>Quem Somos?</h1>

        <h2 className="site-default-title">
          A mais de 40 anos fazendo história.
        </h2>
      </TitleContainer>

      <ImageDescriptionContainer>
        <img
          src={require('~/public/images/placeholders/about-1.jpg')}
          alt="Levita - Móveis Hospitalares - A mais de 40 anos fazendo história."
          title="Levita - Móveis Hospitalares - A mais de 40 anos fazendo história."
          width="960"
          height="530"
        />

        <div>
          <p>
            Através de qualidade e, por meio de um sistema de distribuição
            eficaz, nos consolidamos como a marca mais lembrada pelo paranaense
            na categoria móveis hospitalares. Pioneiros na região de Londrina na
            fabricação de móveis hospitalares, somos conhecidos por manter um
            padrão técnico na confecção de nossos produtos, que resulta em
            móveis de alta durabilidade e atende minuciosamente as exigências do
            mercado.
          </p>
        </div>
      </ImageDescriptionContainer>

      <TechnologyContainer>
        <div>
          <h3 className="site-default-title">
            Atentos à evolução tecnológica e na necessidades dos clientes
          </h3>

          <p>
            Investimos na disponibilização de produtos que viabilizam a higiene
            e também a funcionalidade do sistema hospitalar. Além de manter o
            compromisso com os clientes ofertando produtos confiáveis e seguros,
            possuímos autorização de funcionamento junto à Agência Nacional de
            Vigilância Sanitária, assim como nossos produtos. Com isso,
            permanecemos como referência no mercado em que atuamos por todo
            território nacional.
          </p>
        </div>

        <img
          src={require('~/public/images/placeholders/about-2.jpg')}
          alt="Atentos à evolução tecnológica  e na necessidades dos clientes"
          title="Atentos à evolução tecnológica  e na necessidades dos clientes"
          width="840"
          height="520"
        />
      </TechnologyContainer>
    </AboutContainer>
  </Container>
);

export { About };
