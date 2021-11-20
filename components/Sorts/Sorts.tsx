import { SortTypes } from '@components/Filters/types';
import * as React from 'react';
import * as S from '../Filters/styles';

interface Props {
  onSort: React.Dispatch<React.SetStateAction<SortTypes>>;
}

function Sort({ onSort }: Props) {
  const handleChange = (e: React.BaseSyntheticEvent) => {
    onSort((prevSort) => ({ ...prevSort, order: e.target.value }));
  };

  return (
    <S.Nav aria-label="filter menu">
      <S.Separator />
      <S.H3>PRICE</S.H3>
      <S.List aria-label="sort by price" role="list">
        {['ascending', 'descending'].map((sort) => (
          <S.Li>
            <S.Label htmlFor={sort} aria-label={sort} />
            <S.CheckBox
              onChange={handleChange}
              name={sort}
              id={sort}
              value={sort.slice(0, 3).toUpperCase()}
              type="checkbox"
            />
            <S.LiText>ASCENDING</S.LiText>
          </S.Li>
        ))}
      </S.List>
      <S.Separator />
    </S.Nav>
  );
}

export default Sort;
