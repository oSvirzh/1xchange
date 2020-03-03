import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import { RouteConfig } from '../../../../config/routeConfig';
import ModalWindow from '../../../elements/modal/ModalWindow';
import { modalTypes } from '../../../../config/terms';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(
    modalTypes.TERMS_AND_CONDITONS
  );

  return (
    <Styled.Footer>
      <img src={logo} alt="logo" />
      <Styled.MenuWrapper>
        <Styled.Menu>
          <Styled.MenuItem bold>Contact Us</Styled.MenuItem>
          <Styled.MenuItem>
            <a href="mailto:support@finxflo.com">support@finxflo.com</a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href="mailto:PR@finxflo.com">PR@finxflo.com</a>
          </Styled.MenuItem>
        </Styled.Menu>
        <Styled.Menu>
          <Styled.MenuItem bold>Company</Styled.MenuItem>
          <Styled.MenuItem>
            <Link to={RouteConfig.about}>About</Link>
          </Styled.MenuItem>
        </Styled.Menu>
        <Styled.Menu>
          <Styled.MenuItem bold>Legal</Styled.MenuItem>
          <Styled.MenuItem>
            <button
              onClick={() => {
                setModalContent(modalTypes.TERMS_AND_CONDITONS);
                setShowModal(true);
              }}
            >
              Terms and Conditions
            </button>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <button
              onClick={() => {
                setModalContent(modalTypes.PRIVACY_POLICY);
                setShowModal(true);
              }}
            >
              Privacy Policy
            </button>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <button
              onClick={() => {
                setModalContent(modalTypes.PLATFORM_RULEBOOK);
                setShowModal(true);
              }}
            >
              Trading Rule Book
            </button>
          </Styled.MenuItem>
        </Styled.Menu>
      </Styled.MenuWrapper>
      <ModalWindow
        isShowed={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </Styled.Footer>
  );
};

const Styled = {
  Footer: styled.footer`
    padding: 50px;
    display: flex;
    align-items: flex-start;
    background: linear-gradient(
      356.09deg,
      #101728 -48.91%,
      #11192b 36.39%,
      #15213d 74.69%,
      #0c1834 119.39%
    );
    box-shadow: 0px 20px 40px rgba(16, 22, 40, 0.8);

    img {
      max-width: 120px;
    }
  `,
  MenuWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 100px;
  `,
  Menu: styled.ul`
    display: flex;
    flex: 1 0;
    flex-direction: column;
    color: ${colors.white};
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  `,
  MenuItem: styled.li`
    font-size: 18px;
    line-height: 40px;

    & button,
    a {
      background: none;
      border: none;
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }

    ${(props) => props.bold && 'font-weight: bold;'}
  `,
};

export default Footer;
