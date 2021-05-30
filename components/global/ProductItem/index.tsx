import React from 'react';

import { ProductItemContainer } from './style';

import Link from 'next/link';

interface IProductItemProps {
  image: string;
  category: string;
  title: string;
  description: string;
  slug: string;
}

const ProductItem = ({
  image,
  category,
  title,
  description,
  slug,
}: IProductItemProps) => {
  console.log(image);

  return (
    <ProductItemContainer>
      <div className="product-image-container">
        <img
          src={require(`~/public/images/placeholders/product-1.jpg`)}
          alt={title}
          title={title}
        />

        <Link href={`/produto/${slug}`}>
          <a title="Confira">saiba mais</a>
        </Link>
      </div>

      <span>{category}</span>

      <h1>{title}</h1>

      <p>{description}</p>

      <Link href={`/produto/${slug}`}>
        <a title="Confira">saiba mais</a>
      </Link>
    </ProductItemContainer>
  );
};

export { ProductItem };
