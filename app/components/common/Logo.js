// @flow
import { shell } from 'electron';
import React from 'react';
import styled from 'styled-components';
import { logo, logoWhite } from '/assets/images';

const LogoImg = styled.img`
  position: absolute;
  top: 5px;
  left: 15px;
  width: 130px;
  height: 40px;
  cursor: pointer;
`;

type Props = {
  isDarkModeOn: boolean
};

const Logo = ({ isDarkModeOn }: Props) => <LogoImg src={isDarkModeOn ? logoWhite : logo} onClick={() => shell.openExternal('https://spacemesh.io')} />;

export default Logo;
