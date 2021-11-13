import { Button } from '@styled/pages/HomePageStyles';
import { Product as ProductType } from 'data';
import Image from 'next/image';
import * as React from 'react';
import { Article, Bullet, Description, H2, Heading, Paragraph, ProductImageWrapper } from './styles';

interface Props {
  product: ProductType;
}

function Product({ product }: Props) {
  return (
    <Article>
      <ProductImageWrapper>
        <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
      </ProductImageWrapper>
      <Heading>
        <H2>{product.name}</H2>
        <Paragraph>{product.brand}</Paragraph>
        <Paragraph>{product.price}$</Paragraph>
      </Heading>
      <Description>
        {product.description.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </Description>
      <Button>Add to cart</Button>
    </Article>
  );
}

export default Product;
