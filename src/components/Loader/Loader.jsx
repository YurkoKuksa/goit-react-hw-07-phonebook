import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <SpinnerCircular
        size={50}
        thickness={175}
        speed={100}
        color="rgba(255, 255, 255, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </Wrapper>
  );
};
