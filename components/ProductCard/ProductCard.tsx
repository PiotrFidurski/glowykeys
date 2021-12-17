import { fadeInUp } from '@animations/products';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { slugify } from '@utils/slugify';
import { SquareButton } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { useFormatCurrency } from '@utils/useFormatCurrency';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { A, Article, H2, Heading, Paragraph, ProductImageContainer } from './styles';

interface Props {
  product: ProductType & { image: { original: string; thumbnail: string; placeholder?: string } };
}

function ProductCard({ product }: Props) {
  const { dispatch } = useCart();

  const slug = slugify(product.name);

  const { priceInDollars } = useFormatCurrency(product.price);

  return (
    <Article as={motion.article} layout role="article" variants={fadeInUp} aria-label={product.name}>
      <Link href={`/${product.type}/${slug}`} prefetch={false} passHref>
        <A aria-label={product.name}>
          <ProductImageContainer>
            <Image
              src={product.image.thumbnail}
              loading="lazy"
              sizes="30vw"
              alt=""
              blurDataURL={product.image.placeholder}
              placeholder="blur"
              objectFit="contain"
              layout="fill"
            />
          </ProductImageContainer>
        </A>
      </Link>
      <Heading>
        <H2>{product.name}</H2>
        <Paragraph>{priceInDollars}$</Paragraph>
      </Heading>
      <SquareButton
        aria-label={`add ${product.name} to cart`}
        onClick={() => dispatch({ type: actionTypes.addItem, payload: product })}
        type="button"
      >
        Shop now
      </SquareButton>
    </Article>
  );
}

export default ProductCard;
