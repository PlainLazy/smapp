// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { smColors } from '/vars';
import { DropDown, Tooltip, Dots } from '/basicComponents';

const DetailsRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const DetailsText = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => (theme.isDarkModeOn ? smColors.white : smColors.realBlack)};
`;

const AccItem = styled.div`
  font-size: 13px;
  line-height: 17px;
  color: ${smColors.black};
  padding: 5px;
  width: 100%;
  cursor: inherit;
  ${({ isInDropDown }) => isInDropDown && `opacity: 0.5; border-bottom: 1px solid ${smColors.disabledGray};`}
  &:hover {
    opacity: 1;
    color: ${smColors.darkGray50Alpha};
  }
`;

type Props = {
  masterAccountIndex: number,
  selectAccountIndex: () => void,
  isDarkModeOn: boolean
};

type State = {
  vaultName: string
};

// TODO add auto update for master accounts
const masterAccounts = [
  {
    account: 1,
    label: 'acc 1',
    text: 'vault 1'
  },
  {
    account: 2,
    label: 'acc 2',
    text: 'vault 2'
  },
  {
    account: 3,
    label: 'acc 3',
    text: 'vault 3'
  }
];

class VaultMasterAccounts extends Component<Props, State> {
  render() {
    const { masterAccountIndex, selectAccountIndex, isDarkModeOn } = this.props;
    const ddStyle = { border: `1px solid ${isDarkModeOn ? smColors.white : smColors.black}`, marginLeft: 'auto', flex: '0 0 240px' };

    return (
      <>
        <DetailsRow>
          <DetailsText>Address 1</DetailsText>
          <Tooltip width="250" isDarkModeOn={isDarkModeOn} text="Use an account managed by this wallet to set yourself as the vault’s owner." />
          <Dots />
          <DropDown
            data={masterAccounts}
            onPress={selectAccountIndex}
            DdElement={({ label, text, isMain }) => this.renderAccElement({ label, text, isInDropDown: !isMain })}
            selectedItemIndex={masterAccountIndex}
            rowHeight={40}
            style={ddStyle}
            bgColor={smColors.white}
          />
        </DetailsRow>
        <DetailsRow>
          <DetailsText>Address 2</DetailsText>
          <Tooltip width="250" isDarkModeOn={isDarkModeOn} text="Use an account managed by this wallet to set yourself as the vault’s owner." />
          <Dots />
          <DropDown
            data={masterAccounts}
            onPress={selectAccountIndex}
            DdElement={({ label, text, isMain }) => this.renderAccElement({ label, text, isInDropDown: !isMain })}
            selectedItemIndex={masterAccountIndex}
            rowHeight={40}
            style={ddStyle}
            bgColor={smColors.white}
          />
        </DetailsRow>
        <DetailsRow>
          <DetailsText>Address 3</DetailsText>
          <Tooltip width="250" isDarkModeOn={isDarkModeOn} text="Use an account managed by this wallet to set yourself as the vault’s owner." />
          <Dots />
          <DropDown
            data={masterAccounts}
            onPress={selectAccountIndex}
            DdElement={({ label, text, isMain }) => this.renderAccElement({ label, text, isInDropDown: !isMain })}
            selectedItemIndex={masterAccountIndex}
            rowHeight={40}
            style={ddStyle}
            bgColor={smColors.white}
          />
        </DetailsRow>
      </>
    );
  }

  renderAccElement = ({ label, text, isInDropDown }: { label: string, text: string, isInDropDown: boolean }) => (
    <AccItem key={label} isInDropDown={isInDropDown}>
      {label} {text}
    </AccItem>
  );
}

export default VaultMasterAccounts;
