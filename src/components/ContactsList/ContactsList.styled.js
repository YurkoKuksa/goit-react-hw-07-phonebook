import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ParaghNumber = styled.p`
  font-size: 20px;
`;

export const List = styled.li`
  display: flex;
  margin: 15px 0;
`;

export const ButtonSbm = styled.button`
  display: block;

  padding: 4px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #3498db;
  color: #fff;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #2476c7;
    /* #3488db */
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;
