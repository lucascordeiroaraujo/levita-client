import React from 'react';

import { Container } from '~/public/styles/global';

import { ProductsContainer } from '~/components/pages/products/style';

import { Header } from '~/components/pages/products/Header';

import { List } from '~/components/pages/products/List';

const ProductsPage = () => (
  <Container>
    <ProductsContainer>
      <Header />

      <List />
    </ProductsContainer>
  </Container>
);

export default ProductsPage;
