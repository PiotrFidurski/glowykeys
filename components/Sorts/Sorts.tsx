import { useProducts } from '@components/Products/useProducts';
import * as React from 'react';
import * as S from '../Filters/styles';
import Sort from './Sort';

function Sorts() {
  const { sort } = useProducts();

  return (
    <S.Nav aria-label="sort menu">
      <S.Separator />
      <S.H3>PRICE</S.H3>
      <S.List aria-label="sort by price" role="list">
        {['ascending', 'descending'].map((value) => {
          const isSelected = value.slice(0, 3).toUpperCase() === sort.order;

          return <Sort key={value} name={value} isSelected={isSelected} />;
        })}
      </S.List>
      <S.Separator />
    </S.Nav>
  );
}

export default Sorts;
