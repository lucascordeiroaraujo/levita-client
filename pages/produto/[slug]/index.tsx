import React from 'react';

import { Container } from '~/public/styles/global';

import {
  ProductContainer,
  BackToHome,
  ProductInfoContainer,
} from '~/components/pages/product/style';

import { Content } from '~/components/pages/product/Content';

import { Sidebar } from '~/components/pages/product/Sidebar';

import { BsArrowLeft } from 'react-icons/bs';

import Link from 'next/link';

const ProductPage = () => (
  <Container>
    <ProductContainer>
      <BackToHome>
        <Link href="/">
          <a title="Voltar">
            <BsArrowLeft /> <span>Voltar para o início</span>
          </a>
        </Link>
      </BackToHome>

      <ProductInfoContainer>
        <Content />

        <Sidebar />
      </ProductInfoContainer>
    </ProductContainer>
  </Container>
);

export default ProductPage;
