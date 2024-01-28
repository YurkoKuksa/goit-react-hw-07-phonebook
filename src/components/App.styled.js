import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40;
  color: #010101;
`;

export const HeaderTwo = styled.h2`
  color: #686880;
  margin-bottom: 10px;
  font-size: 70px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    color: #5b5885;
  }
`;
export const Error = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: 700;

  margin-top: 30px;
`;
