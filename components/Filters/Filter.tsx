import * as React from 'react';
import { CheckBox, Label, Li, LiText } from './styles';
import { FilterTypes } from './types';

interface Props {
  type: 'connectivity' | 'variants';
  name: string;
  filters: FilterTypes;
  onFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

function Filter({ type, name, onFilter, filters }: Props) {
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;

    onFilter((prevFilter) => ({
      ...prevFilter,
      [type]: prevFilter[type].includes(value)
        ? prevFilter[type].filter((con) => con !== value)
        : [...prevFilter[type], value],
    }));
  };

  return (
    <Li>
      <Label htmlFor={name} aria-label={name} />
      <CheckBox
        onChange={handleChange}
        checked={filters[type].includes(name)}
        name={name}
        id={name}
        value={name}
        type="checkbox"
      />
      <LiText isSelected={filters[type].includes(name)}>{name.toUpperCase()}</LiText>
    </Li>
  );
}

export default Filter;
