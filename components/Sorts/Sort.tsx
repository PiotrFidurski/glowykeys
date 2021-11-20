import { SortTypes } from '@components/Filters/types';
import * as React from 'react';
import * as S from '../Filters/styles';

interface Props {
  name: string;
  isSelected: boolean;
  onSort: React.Dispatch<React.SetStateAction<SortTypes>>;
}

function Sort({ name, isSelected, onSort }: Props) {
  const handleChange = (e: React.BaseSyntheticEvent) => {
    onSort((prevSort) => ({ ...prevSort, order: e.target.value }));
  };

  return (
    <S.Li>
      <S.Label htmlFor={name} aria-label={name} />
      <S.CheckBox
        checked={isSelected}
        onChange={handleChange}
        name={name}
        id={name}
        value={name.slice(0, 3).toUpperCase()}
        type="checkbox"
      />
      <S.LiText isSelected={isSelected}>{name.toUpperCase()}</S.LiText>
    </S.Li>
  );
}

export default Sort;
