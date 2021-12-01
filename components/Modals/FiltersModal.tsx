import Filter from '@components/Filter/Filter';
import * as S from '@components/FilterList/styles';
import { useProductShelf } from '@components/ProductShelf/useProductShelf';
import Sort from '@components/Sort/Sort';
import { RoundButton } from '@utils/style-utils';
import * as React from 'react';
import Modal from 'react-modal';
import Close from '../../public/assets/vector/close.svg';
import { customStyles } from './customStyles';
import { HeaderContainer } from './styles';

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FiltersModal({ isOpen, setOpen }: Props) {
  const { filters, activeFilters, sort } = useProductShelf();

  return (
    <Modal
      id="filter-dialog"
      isOpen={isOpen}
      style={{
        ...customStyles,
        content: { ...customStyles.content, inset: 0 },
      }}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={() => setOpen(false)}
    >
      <div aria-label="filter menu">
        <HeaderContainer>
          <RoundButton
            onClick={() => setOpen(false)}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="close filter dialog"
            aria-controls="filter-dialog"
          >
            <Close width="20" height="20" fill="white" />
          </RoundButton>
        </HeaderContainer>
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
      </div>
    </Modal>
  );
}

export default FiltersModal;
