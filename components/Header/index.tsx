import React from 'react';

import { Container } from '~/public/styles/global';

import { HeaderContainer } from './style';

import Link from 'next/link';

const SiteHeader = () => (
  <HeaderContainer>
    <Container className="header-container">
      <Link href="#">
        <a title="Página inicial">
          <img
            src={require('~/public/images/levita.png')}
            alt="Levita - Móveis Hospitalares"
            title="Levita - Móveis Hospitalares"
            width="176"
            height="75"
          />
        </a>
      </Link>

      <ul>
        <li>
          <Link href="#">
            <a className="active-item" title="Página inicial">
              Início
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a title="Conheça a Levita - Móveis Hospitalares">
              Sobre a empresa
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a title="Confira nossos produtos">Produtos</a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a title="Entre em contato conosco">Contato</a>
          </Link>
        </li>
      </ul>

      <button>Solicite um orçamento</button>
    </Container>
  </HeaderContainer>
);

export { SiteHeader };
