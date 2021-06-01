import React from 'react';

import { SidebarContainer } from './style';

import { ProductItem } from '~/components/global/ProductItem';

const Sidebar = () => (
  <SidebarContainer>
    <h1>Produtos relacionados</h1>

    <ProductItem
      image="product-1.jpg"
      category="carro padiola e maca"
      title="Carro Maca Hidráulico - LV06"
      description="Estrutura em tubos retangulares de aço carbono. Acabamento em pintura eletrostática a pó após tratamento antiferruginoso. Movimentos: Trendelenburg, Proclive e Elevação..."
      slug="carro-maca-hidraulico-lv06"
    />

    <ProductItem
      image="product-2.jpg"
      category="carro padiola e maca"
      title="Carro padiola estofado"
      description="Carro confeccionado em tubos redondos de aço carbono, rodas giratórias sendo duas com freio na diagonal. Leito removível em MDF revestido com espuma e courvin, com cabeceira regulável."
      slug="carro-padiola-estofado"
    />
  </SidebarContainer>
);

export { Sidebar };
