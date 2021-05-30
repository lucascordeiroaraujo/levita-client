import React from 'react';

import Container from './style';

interface TooltipProps {
  title: string;
  className?: string;
  children: any;
}

const Tootip = ({ title, className, children }: TooltipProps) => (
  <Container className={className}>
    {children}

    <span>{title}</span>
  </Container>
);

export default Tootip;
