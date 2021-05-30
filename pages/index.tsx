import React from 'react';

import { SlideShow } from '~/components/SlideShow';

import { About } from '~/components/About';

import { Products } from '~/components/Products';

import { Budget } from '~/components/Budget';

const IndexPage = () => (
  <>
    <SlideShow />

    <About />

    <Products />

    <Budget />
  </>
);

export default IndexPage;
