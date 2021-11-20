import { SortTypes } from '@components/Filters/types';
import * as React from 'react';
import * as S from '../Filters/styles';
import Sort from './Sort';

interface Props {
  sort: SortTypes;
  onSort: React.Dispatch<React.SetStateAction<SortTypes>>;
}

function Sorts({ onSort, sort }: Props) {
  return (
    <S.Nav aria-label="filter menu">
      <S.Separator />
      <S.H3>PRICE</S.H3>
      <S.List aria-label="sort by price" role="list">
        {['ascending', 'descending'].map((order) => {
          const isSelected = order.slice(0, 3).toUpperCase() === sort.order;

          return <Sort name={order} isSelected={isSelected} onSort={onSort} />;
        })}
      </S.List>
      <S.Separator />
    </S.Nav>
  );
}

export default Sorts;
