import Filter from '@components/Filter/Filter';
import FiltersModal from '@components/Modals/FiltersModal/FiltersModal';
import { useProductShelf } from '@components/ProductShelf/useProductShelf';
import Sort from '@components/Sort/Sort';
import { RoundButton } from '@utils/style-utils';
import * as React from 'react';
import FilterIcon from '../../public/assets/vector/sort.svg';
import * as S from './styles';

function FilterList() {
  const { filters, activeFilters, sort } = useProductShelf();

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <S.Container>
        <S.Nav aria-label="filter menu">
          {Object.entries(filters)
            .filter(([, value]) => value.length)
            .map(([type, options]) => (
              <div key={type}>
                <S.Separator />
                <S.H3>{type.toUpperCase()}</S.H3>
                <S.List aria-label={`${type} filter options`} role="list">
                  {options.map((filter) => {
                    const isActive = activeFilters[type].includes(filter);

                    return <Filter key={filter} isSelected={isActive} name={filter} type={type} />;
                  })}
                </S.List>
              </div>
            ))}
        </S.Nav>
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
      </S.Container>
      {open ? <FiltersModal setOpen={setOpen} isOpen={open} /> : null}
      <S.StickyContainer>
        <RoundButton aria-label="open product filters" onClick={() => setOpen(true)}>
          <FilterIcon fill="white" width="24" height="24" />
        </RoundButton>
      </S.StickyContainer>
    </>
  );
}

export default FilterList;
