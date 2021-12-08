import { Hr, SmallImageWrapper } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { A, Li, ResultContainer, ResultDetailsContainer } from './styles';

interface Props {
  product: ProductType;
}

function Result({ product }: Props) {
  return (
    <Li>
      <Link href={`/${product.type}s/${product.id}`} passHref prefetch={false}>
        <A>
          <ResultContainer>
            <SmallImageWrapper>
              <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
            </SmallImageWrapper>
            <ResultDetailsContainer>
              <p>{product.name}</p>
              <p>{product.price.toFixed(2)}$</p>
            </ResultDetailsContainer>
          </ResultContainer>
        </A>
      </Link>
      <Hr />
    </Li>
  );
}

export default Result;
