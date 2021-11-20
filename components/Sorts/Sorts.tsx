import { SortTypes } from '@components/Filters/types';
import * as React from 'react';
import * as S from '../Filters/styles';

interface Props {
  sort: SortTypes;
  onSort: React.Dispatch<React.SetStateAction<SortTypes>>;
}

function Sort({ onSort, sort }: Props) {
  const handleChange = (e: React.BaseSyntheticEvent) => {
    onSort((prevSort) => ({ ...prevSort, order: e.target.value }));
  };

  const isSelected = (value: string) => sort.order === value.slice(0, 3).toUpperCase();

  return (
    <S.Nav aria-label="filter menu">
      <S.Separator />
      <S.H3>PRICE</S.H3>
      <S.List aria-label="sort by price" role="list">
        {['ascending', 'descending'].map((order) => (
          <S.Li>
            <S.Label htmlFor={order} aria-label={order} />
            <S.CheckBox
              checked={isSelected(order)}
              onChange={handleChange}
              name={order}
              id={order}
              value={order.slice(0, 3).toUpperCase()}
              type="checkbox"
            />
            <S.LiText isSelected={isSelected(order)}>{order.toUpperCase()}</S.LiText>
          </S.Li>
        ))}
      </S.List>
      <S.Separator />
    </S.Nav>
  );
}

export default Sort;
