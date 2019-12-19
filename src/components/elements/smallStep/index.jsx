import React from 'react';
import styled from 'styled-components';
import Step from './smallStep';

const Sidebar = styled.div`
  background: linear-gradient(
    325.95deg,
    #101728 -143.03%,
    #11192b -3.81%,
    #15213d 58.69%,
    #0c1834 131.65%
  );
  max-width: 500px;
  width: 100%;
  padding: 40px;
`;

const SmallStep = () => {
  return (
    <>
      <Step data-count="1">
        Make sure you provided the correct email address.
      </Step>
      <Step data-count="2">Check your email spam/junk folder.</Step>
    </>
  );
};

export { SmallStep };
