import { debounce } from '@utils/debounce';
import { Hr, RoundButton, SquareButton } from '@utils/style-utils';
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

const categories = ['keyboards', 'switches', 'keycaps'];

function SearchModal({ isOpen, setOpen }: Props) {
  const [query, setQuery] = React.useState('');

  const { data, isValidating, error } = useSearch<{ data: ProductType[] }>(query);

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, 500);

  return (
    <Modal
      isOpen={isOpen}
      aria-label="search"
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
          <RoundButton
            style={{ alignSelf: 'flex-end' }}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="close search dialog"
          >
            <Close fill="white" width="25" height="25" />
          </RoundButton>
          <SearchContainer>
            <Form role="search" onSubmit={(e) => e.preventDefault()}>
              <label hidden htmlFor="search">
                search
              </label>
              <Input
                autoFocus
                placeholder="Search"
                type="text"
                id="search"
                aria-label="Search"
                autoComplete="off"
                autoCorrect="off"
                onChange={handleChange}
              />
            </Form>
            <Hr />

            {!data && !error && isValidating ? <div>loading...</div> : null}
            {data && !data.data.length ? (
              <span style={{ textAlign: 'center' }}>No matches found, try searching for something else</span>
            ) : null}
            {data && data.data
              ? categories
                  .filter((category) => data.data.some((product) => product.type === category))
                  .map((category) => (
                    <Ul key={category} aria-label={category} role="list">
                      <h2 id="category-name">{category.toUpperCase()}</h2>
                      {data?.data
                        ?.filter((product) => product.type === category)
                        .map((product) => (
                          <Result setOpen={setOpen} product={product} key={product.id} />
                        ))}
                    </Ul>
                  ))
              : null}
            <SquareButton role="button">All Products</SquareButton>
          </SearchContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
}

export default SearchModal;
