import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  padding: 1rem 2rem;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  color: ${({ theme: { color } }) => color.highlight};
  letter-spacing: 0.2rem;
`;

export const CheckBox = styled.input`
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const LiText = styled.span`
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  border-color: transparent;
  background: ${({ theme: { color } }) => color.accent};
`;
