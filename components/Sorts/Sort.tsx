import { actionTypes } from '@components/Products/types';
import { useDispatch } from '@components/Products/useDispatch';
import * as React from 'react';
import * as S from '../Filters/styles';

interface Props {
  name: string;
  isSelected: boolean;
}

function SortComponent({ name, isSelected }: Props) {
  const dispatch = useDispatch();

  const handleChange = (e: React.BaseSyntheticEvent) => {
    dispatch({ type: actionTypes.orderByPrice, payload: e.target.value });
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

const Sort = React.memo(SortComponent);

export default Sort;
