import { actionTypes } from '@components/Products/types';
import { useDispatch } from '@components/Products/useDispatch';
import { useProducts } from '@components/Products/useProducts';
import * as React from 'react';
import { CheckBox, Label, Li, LiText } from './styles';

interface Props {
  type: string;
  name: string;
}

function Filter({ type, name }: Props) {
  const dispatch = useDispatch();
  const { activeFilters } = useProducts();
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;
    dispatch({ type: actionTypes.setFilter, payload: { value, type } });
  };

  return (
    <Li>
      <Label htmlFor={name} aria-label={name} />
      <CheckBox
        onChange={handleChange}
        checked={activeFilters[type].includes(name)}
        name={name}
        id={name}
        value={name}
        type="checkbox"
      />
      <LiText isSelected={activeFilters[type].includes(name)}>{name.toUpperCase()}</LiText>
    </Li>
  );
}

export default Filter;
