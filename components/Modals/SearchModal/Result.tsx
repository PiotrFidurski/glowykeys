import { slugify } from '@utils/slugify';
import { Hr, SmallImageWrapper } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { useFormatCurrency } from '@utils/useFormatCurrency';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { A, Li, ResultContainer, ResultDetailsContainer } from './styles';

interface Props {
  product: ProductType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Result({ product, setOpen }: Props) {
  const { priceInDollars } = useFormatCurrency(product.price);

  return (
    <Li>
      <Link href={`/${product.type}/${slugify(product.name)}`} passHref prefetch={false}>
        <A onClick={() => setOpen(false)} aria-label={product.name}>
          <ResultContainer>
            <SmallImageWrapper>
              <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
            </SmallImageWrapper>
            <ResultDetailsContainer>
              <p>{product.name}</p>
              <p>{priceInDollars}</p>
            </ResultDetailsContainer>
          </ResultContainer>
        </A>
      </Link>
      <Hr />
    </Li>
  );
}

export default Result;
