import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { Button } from '../buttons/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { colors } from '../../../styles/const';

const ModalWindow = ({ isShowed, onAgree, onClose, content, title }) => {
  const [show, setShow] = useState(isShowed);

  useEffect(() => {
    setShow(isShowed);
  }, [isShowed]);

  const handleClose = () => {
    onClose();
    setShow(false);
  };

  const handleAgree = () => {
    onAgree();
    handleClose();
  };

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Styled.ModalHeader closeButton>
          <Styled.ModalTitle>{title}</Styled.ModalTitle>
        </Styled.ModalHeader>
        <Styled.ModalBody>{content}</Styled.ModalBody>
        <Styled.ModalFooter>
          {onAgree && (
            <Button variant="primary" onClick={handleAgree}>
              Agree
            </Button>
          )}
        </Styled.ModalFooter>
      </Modal>
    </>
  );
};

const Styled = {
  ModalTitle: styled(Modal.Title)`
    font-size: 30px;
    line-height: 38px;
  `,
  ModalBody: styled(Modal.Body)`
    padding: 13px 30px 30px 40px;
    margin-right: 30px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    max-height: 320px;
    overflow-y: auto;
  `,
  ModalHeader: styled(ModalHeader)`
    padding: 30px 30px 13px 40px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    border-bottom: none;
  `,
  ModalFooter: styled(Modal.Footer)`
    padding: 30px 40px 13px 40px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    border-top: none;
  `,
};

export default ModalWindow;
