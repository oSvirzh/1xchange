import React from 'react';
import styled from 'styled-components';
import { NumerableItem } from '../elements/list/NumerableList';
import examplePhoto from '../../assets/images/example.jpg';
import dropzoneIcon from '../../assets/images/dropzone.svg';
import '../../../src/styles/styles.scss';

const WebCamFlow = () => {
  return (
    <Styled.WebCam>
      <Styled.Column>
        <p className="subtitle">Example</p>
        <Styled.DropZone>
          <Styled.DropZoneImage src={dropzoneIcon} alt="upload photo" />
          <Styled.DropZoneInput type="file" />
        </Styled.DropZone>
        <NumerableItem
          text="First name and last name clearly visible"
          number="1"
        />
        <NumerableItem text="Date of birth clearly visible" number="2" />
        <NumerableItem text="ID number clearly visible" number="3" />
        <NumerableItem
          text="Fully in frame, not cut off on any side"
          number="4"
        />
      </Styled.Column>
      <Styled.ImageWrapper>
        <img src={examplePhoto} alt="web cam example" />
      </Styled.ImageWrapper>
    </Styled.WebCam>
  );
};

const Styled = {
  WebCam: styled.div`
    display: flex;
    width: 700px;
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    box-shadow: 0 20px 40px rgba(16, 22, 40, 0.2);
    border-radius: 3px;
  `,
  Column: styled.div`
    padding: 20px;
    width: 50%;
  `,
  ImageWrapper: styled.div``,
  DropZone: styled.div`
    position: relative;
    padding: 20px;
    text-align: center;
    background: rgba(16, 22, 40, 0.8);
  `,
  DropZoneImage: styled.img`
    width: 100px;
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
  AuthBody: styled.div`
    position: relative;
    flex: 1 auto;
    padding: 40px 120px 40px 120px;
    background-color: #22305a;
  `,
};

export default WebCamFlow;
