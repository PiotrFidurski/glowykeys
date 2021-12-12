import { slugify } from '@utils/slugify';
import { Hr, SmallImageWrapper } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { A, Li, ResultContainer, ResultDetailsContainer } from './styles';

interface Props {
  product: ProductType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Result({ product, setOpen }: Props) {
  return (
    <Li>
      <Link href={`/${product.type}s/${slugify(product.name)}`} passHref prefetch={false}>
        <A onClick={() => setOpen(false)}>
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
