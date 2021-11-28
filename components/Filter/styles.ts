import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
`;

export const Label = styled.label``;

export const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const LiText = styled.span<{ isSelected?: boolean }>`
  letter-spacing: 0.2rem;
  color: ${({ isSelected, theme: { color } }) => (isSelected ? color.highlight : color.primary)};
  font-weight: 600;
  font-size: 1rem;
`;
