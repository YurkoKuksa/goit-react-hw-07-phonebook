import styled from 'styled-components';

export const FormContainer = styled.form`
  margin: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export const LabelCont = styled.label`
  margin: 10px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  height: 40px;
`;

export const ButtonSbm = styled.button`
  display: block;

  padding: 10px 20px;
  font-size: 28px;
  font-weight: 700;
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

  margin: 5px;

  &:hover {
    background-color: #2476c7;
    /* #3488db */
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;
