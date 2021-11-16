import { Button } from '@styled/pages/HomePageStyles';
import { Product as ProductType } from 'data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { Article, H2, Heading, Paragraph, ProductImageWrapper } from './styles';

interface Props {
  product: ProductType;
}

function Product({ product }: Props) {
  return (
    <Article as={motion.article} layout>
      <ProductImageWrapper>
        <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
      </ProductImageWrapper>
      <Heading>
        <H2>{product.name}</H2>
        <Paragraph>{product.brand}</Paragraph>
        <Paragraph>{product.price}$</Paragraph>
        <Paragraph>{product.connectivity}</Paragraph>
        <Paragraph>{product.variant}</Paragraph>
      </Heading>
      <Button type="button">Add to cart</Button>
    </Article>
  );
}

export default Product;
