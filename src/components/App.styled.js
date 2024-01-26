import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40;
  color: #010101;
  background-color: #98f398;
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
