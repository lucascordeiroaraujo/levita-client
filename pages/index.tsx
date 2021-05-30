import React from 'react';

import { SlideShow } from '~/components/pages/home/SlideShow';

import { About } from '~/components/pages/home/About';

import { Products } from '~/components/pages/home/Products';

import { Budget } from '~/components/global/Budget';

const IndexPage = () => (
  <>
    <SlideShow />

    <About />

    <Products />

    <Budget />
  </>
);

export default IndexPage;
