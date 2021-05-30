import React, { useRef } from 'react';

import { Container } from '~/public/styles/global';

import { ProductsContainer, SliderContainer, SliderControls } from './style';

import Link from 'next/link';

import Slider, { Settings } from 'react-slick';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { ProductItem } from '~/components/ProductItem';

const Products = () => {
  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const sliderPrevNext = (direction: 'prev' | 'next') => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      if (direction === 'prev') {
        sliderRef.current?.slickPrev();
      } else if (direction === 'next') {
        sliderRef.current?.slickNext();
      }
    }
  };

  return (
    <ProductsContainer>
      <Container className="products-container">
        <h1 className="site-default-title">Confira nossos produtos</h1>

        <Link href="/produtos">
          <a title="Confira">Ver todos os produtos</a>
        </Link>

        <SliderContainer>
          <SliderControls>
            <button onClick={() => sliderPrevNext('prev')}>
              <BsChevronCompactLeft />
            </button>

            <button onClick={() => sliderPrevNext('next')}>
              <BsChevronCompactRight />
            </button>
          </SliderControls>

          <Slider ref={sliderRef} {...sliderSettings}>
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

            <ProductItem
              image="product-3.jpg"
              category="carro padiola e maca"
              title="Carro padiola estofado com leito em chapa"
              description="Carro confeccionado em tubos redondos de aço, rodas giratórias sendo duas com frio diagonal. Leito removível em chapa com cabeceira regulável."
              slug="carro-padiola-estofado-com-leito-em-chapa"
            />

            <ProductItem
              image="product-1.jpg"
              category="carro padiola e maca"
              title="Carro Maca Hidráulico - LV06"
              description="Estrutura em tubos retangulares de aço carbono. Acabamento em pintura eletrostática a pó após tratamento antiferruginoso. Movimentos: Trendelenburg, Proclive e Elevação..."
              slug="carro-maca-hidraulico-lv06"
            />
          </Slider>
        </SliderContainer>
      </Container>
    </ProductsContainer>
  );
};

export { Products };
