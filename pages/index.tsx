import React from 'react';

import { SlideShow } from '~/components/pages/home/SlideShow';

import { About } from '~/components/pages/home/About';

import { Products } from '~/components/pages/home/Products';

const IndexPage = () => (
  <>
    <SlideShow />

    <About />

    <Products />
  </>
);

export default IndexPage;
