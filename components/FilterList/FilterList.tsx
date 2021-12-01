import Filter from '@components/Filter/Filter';
import FiltersModal from '@components/Modals/FiltersModal';
import { useProductShelf } from '@components/ProductShelf/useProductShelf';
import Sort from '@components/Sort/Sort';
import { SquareButton } from '@utils/style-utils';
import * as React from 'react';
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
            .map(([by, options]) => (
              <div key={by}>
                <S.Separator />
                <S.H3>{by.toUpperCase()}</S.H3>
                <S.List aria-label={`${by} filter options`} role="list">
                  {options.map((filter) => {
                    const isActive = activeFilters[by].includes(filter);

                    return <Filter key={filter} isSelected={isActive} name={filter} type={by} />;
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
        <SquareButton aria-label="open product filters" onClick={() => setOpen(true)}>
          Product Filters
        </SquareButton>
      </S.StickyContainer>
    </>
  );
}

export default FilterList;
