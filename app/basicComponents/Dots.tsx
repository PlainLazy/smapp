import React from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  flex: 1;
  flex-shrink: 1;
  overflow: hidden;
  margin-right: 28px;
  color: ${({ theme }) => theme.dot.color};
  ::before {
    float: left;
    width: 0;
    white-space: nowrap;
    content: '.................................................'
      '.................................................';
  }
`;

const Dots = () => <Dot />;

export default Dots;
