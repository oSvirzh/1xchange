import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/const';

const Dropzone = () => {
  return (
    <Styled.DropZone>
      <Styled.DropZoneText>
        Drag file here or{' '}
        <Styled.DropZoneTextClick>
          <Styled.DropZoneInput type="file" /> click here to browse{' '}
        </Styled.DropZoneTextClick>
      </Styled.DropZoneText>
    </Styled.DropZone>
  );
};

const Styled = {
  DropZone: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(16, 22, 40, 0.8);
    border: 1px dashed #c1c1c1;
    border-radius: 3px;
    height: 170px;
    width: 464px;
  `,
  DropZoneInput: styled.input`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `,
  DropZoneText: styled.p`
    margin: 0;
    font-size: 14px;
    color: ${colors.white};
  `,
  DropZoneTextClick: styled.span`
    position: relative;
    text-decoration: underline;
    cursor: pointer;
  `,
};

export default Dropzone;
