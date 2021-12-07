import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  width: 100%;
  background: rgba(0 0 0 / 100%);
  padding: 1rem;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background: rgba(0 0 0 / 80%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;

export const Input = styled.input`
  background: transparent;
  width: 100%;
  border: 0;
  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.primary};
  transition: border-bottom-color 0.2s ease-in-out;

  @supports selector(:focus-visible) {
    &:focus-visible {
      outline: none;
      border-bottom-color: ${({ theme: { color } }) => color.highlight};
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const Li = styled.li`
  width: 100%;
`;

export const A = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  color: ${({ theme: { color } }) => color.highlight};
  font-weight: 600;
`;

export const ResultContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const ResultDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    :nth-child(1) {
      color: white;
    }
  }
`;
