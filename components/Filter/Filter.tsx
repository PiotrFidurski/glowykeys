import { actionTypes } from '@components/ProductShelf/types';
import { useDispatch } from '@components/ProductShelf/useDispatch';
import * as React from 'react';
import { CheckBox, Label, Li, LiText } from './styles';

interface Props {
  type: string;
  name: string;
  isSelected: boolean;
}

function FilterComponent({ type, name, isSelected }: Props) {
  const dispatch = useDispatch();

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;

    dispatch({ type: actionTypes.setFilter, payload: { filter: value, type } });
  };

  return (
    <Li>
      <Label htmlFor={name} aria-label={name} />
      <CheckBox onChange={handleChange} checked={isSelected} name={name} id={name} value={name} type="checkbox" />
      <LiText isSelected={isSelected}>{name.toUpperCase()}</LiText>
    </Li>
  );
}

const Filter = React.memo(FilterComponent);

export default Filter;
