import React, { useCallback, useState } from 'react';

import { Container } from '~/public/styles/global';

import {
  HeaderContainer,
  HeaderMenuContainer,
  HeaderMenuItem,
  MenuMobileContainer,
} from './style';

import Link from 'next/link';

import { useRouter } from 'next/router';

import { Link as ReactScrollLink } from 'react-scroll';

import OutsideClickHandler from 'react-outside-click-handler';

const SiteHeader = () => {
  const router = useRouter();

  const isCurrentRouter = useCallback(
    (slug: string) => {
      return router.pathname === slug;
    },
    [router],
  );

  const [menuMobileOpend, setMenuMobileOpen] = useState(false);

  const handleToggleMenuMobile = () => {
    setMenuMobileOpen(!menuMobileOpend);
  };

  const handleCloseMenuMobile = () => {
    setMenuMobileOpen(false);
  };

  return (
    <HeaderContainer>
      <Container className="header-container">
        <Link href="/">
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

        <OutsideClickHandler onOutsideClick={handleCloseMenuMobile}>
          <MenuMobileContainer
            menuMobileOpend={menuMobileOpend}
            onClick={handleToggleMenuMobile}
          >
            <span />
          </MenuMobileContainer>
        </OutsideClickHandler>

        <HeaderMenuContainer menuMobileOpend={menuMobileOpend}>
          <HeaderMenuItem isActive={isCurrentRouter('/')}>
            <Link href="/">
              <a title="Página inicial">Início</a>
            </Link>
          </HeaderMenuItem>

          <HeaderMenuItem>
            {router.pathname === '/' ? (
              <ReactScrollLink to="sobre-a-empresa" spy={true} smooth={true}>
                Sobre a empresa
              </ReactScrollLink>
            ) : (
              <Link href="/#sobre-a-empresa">
                <a title="Conheça a Levita - Móveis Hospitalares">
                  Sobre a empresa
                </a>
              </Link>
            )}
          </HeaderMenuItem>

          <HeaderMenuItem isActive={isCurrentRouter('/produtos')}>
            <Link href="/produtos">
              <a title="Confira nossos produtos">Produtos</a>
            </Link>
          </HeaderMenuItem>

          <HeaderMenuItem>
            <Link href="#">
              <a title="Entre em contato conosco">Contato</a>
            </Link>
          </HeaderMenuItem>
        </HeaderMenuContainer>

        <ReactScrollLink
          className="budget"
          to="budget"
          spy={true}
          smooth={true}
        >
          Solicite um orçamento
        </ReactScrollLink>
      </Container>
    </HeaderContainer>
  );
};

export { SiteHeader };
