import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import { Button } from '../buttons/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { colors } from '../../../styles/const';

const ModalWindow = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        МОДАЛКА
      </Button>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Styled.ModalHeader closeButton>
          <Styled.ModalTitle>Terms of Use</Styled.ModalTitle>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur.
        </Styled.ModalBody>
        <Styled.ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agree
          </Button>
        </Styled.ModalFooter>
      </Modal>
    </>
  );
};

const Styled = {
  ModalTitle: styled(ModalTitle)`
    font-size: 30px;
    line-height: 38px;
  `,
  ModalBody: styled(ModalBody)`
    padding: 13px 30px 30px 40px;
    margin-right: 30px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    max-height: 320px;
    overflow-y: auto;
  `,
  ModalHeader: styled(ModalHeader)`
    padding: 30px 40px 13px 40px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    border-bottom: none;
  `,
  ModalFooter: styled(ModalFooter)`
    padding: 30px 40px 13px 40px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    border-top: none;
  `,
};

export default ModalWindow;
