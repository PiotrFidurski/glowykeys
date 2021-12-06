import { Hr } from '@components/CartItem/styles';
import { debounce } from '@utils/debounce';
import { RoundButton, SquareButton } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { useSearch } from '@utils/useSearch';
import * as React from 'react';
import Modal from 'react-modal';
import Close from '../../../public/assets/vector/close.svg';
import { customStyles } from '../customStyles';
import Result from './Result';
import { Container, Form, Input, SearchContainer, Ul, Wrapper } from './styles';

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchModal({ isOpen, setOpen }: Props) {
  const [query, setQuery] = React.useState('');

  const { data, isValidating } = useSearch<{ data: ProductType[] }>(query);

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, 450);

  return (
    <Modal
      isOpen={isOpen}
      style={{
        ...customStyles,
        content: { ...customStyles.content, inset: 0, background: 'transparent' },
      }}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={() => setOpen(false)}
    >
      <Container>
        <Wrapper>
          <RoundButton style={{ alignSelf: 'flex-end' }} type="button" onClick={() => setOpen(false)}>
            <Close fill="white" width="25" height="25" />
          </RoundButton>
          <SearchContainer>
            <Form role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search">
                <Input
                  autoFocus
                  placeholder="Search"
                  type="text"
                  name="search"
                  aria-label="Search"
                  autoComplete="off"
                  autoCorrect="off"
                  onChange={handleChange}
                />
              </label>
            </Form>
            <Hr />
            <Ul>
              {isValidating ? (
                <div>loading...</div>
              ) : (
                data?.data?.map((product) => <Result product={product} key={product.id} />)
              )}
              <SquareButton>All Products</SquareButton>
            </Ul>
          </SearchContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
}

export default SearchModal;
