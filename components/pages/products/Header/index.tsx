import React from 'react';

import { HeaderContainer } from './style';

import { CategorySelector } from '~/components/global/CategorySelector';

const Header = () => (
  <HeaderContainer>
    <h1 className="site-default-title">Nossos produtos</h1>

    <CategorySelector />
  </HeaderContainer>
);

export { Header };
