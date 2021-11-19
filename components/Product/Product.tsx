import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { Product as ProductType } from '@utils/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { Article, Button, H2, Heading, Paragraph, ProductImageWrapper } from './styles';

interface Props {
  product: ProductType;
}

function Product({ product }: Props) {
  const { dispatch } = useCart();

  return (
    <Article as={motion.article} layout role="article" aria-label={product.name}>
      <ProductImageWrapper>
        <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
      </ProductImageWrapper>
      <Heading>
        <H2>{product.name}</H2>
        <Paragraph>{product.price}$</Paragraph>
      </Heading>
      <Button
        onClick={() => dispatch({ type: actionTypes.addItem, payload: product })}
        aria-label={`add ${product.name} to cart`}
        type="button"
      >
        Shop now
      </Button>
    </Article>
  );
}

export default Product;
