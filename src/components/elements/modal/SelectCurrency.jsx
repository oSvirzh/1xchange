import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Input from '../../form/SearchInput';
import { colors } from '../../../styles/const';
import Table from 'react-bootstrap/Table';

const AdvancedTrading = ({ isShowed, onAgree }) => {
  const [show, setShow] = useState(isShowed);

  useEffect(() => {
    setShow(isShowed);
  }, [isShowed]);

  const handleClose = () => setShow(false);

  const handleAgree = () => {
    onAgree();
    handleClose();
  };

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName=""
        show={show}
        onHide={handleClose}
      >
        <Styled.ModalHeader closeButton>
          <Styled.Currency>BTC</Styled.Currency>
          <Styled.Currency>ETH</Styled.Currency>
          <Styled.Currency>XRP</Styled.Currency>
          <Styled.Currency>XLM</Styled.Currency>
          <Styled.Currency>TRX</Styled.Currency>
          <Styled.SearchWrapper>
            <Input />
          </Styled.SearchWrapper>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.Table striped bordered hover>
            <Styled.TableHead>
              <tr>
                <th>Currency</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>24h Volume</th>
              </tr>
            </Styled.TableHead>
            <Styled.TableBody>
              <tr>
                <Styled.TableData>USD</Styled.TableData>
                <Styled.TableData>9400</Styled.TableData>
                <Styled.TableData>21.0 USD (0.24%)</Styled.TableData>
                <Styled.TableData>40.021325 BTC </Styled.TableData>
              </tr>
              <tr>
                <Styled.TableData>GBP</Styled.TableData>
                <Styled.TableData>9400</Styled.TableData>
                <Styled.TableData>-21.0 USD (-0.24%)</Styled.TableData>
                <Styled.TableData>40.021325 BTC </Styled.TableData>
              </tr>
            </Styled.TableBody>
          </Styled.Table>
        </Styled.ModalBody>
      </Modal>
    </>
  );
};

const Styled = {
  Currency: styled.div`
    padding: 10px 23px;
    border: 1px solid ${colors.white};
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    max-width: 78px;

    :not(:first-child) {
      margin-left: 8px;
    }
  `,
  ModalBody: styled(Modal.Body)`
    padding: 20px 10px 15px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
  `,
  ModalHeader: styled(ModalHeader)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    color: ${colors.white};
    font-size: 10px;
    line-height: 20px;
    border-bottom: 1px solid rgba(256, 256, 256, 0.2);
  `,
  SearchWrapper: styled.div`
    margin-top: 10px;
    width: 100%;
  `,
  Table: styled(Table)`
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0 7px;
  `,
  TableHead: styled.thead`
    font-size: 12px;

    tr th:first-child {
      padding-left: 10px;
    }
  `,
  TableBody: styled.tbody`
    font-size: 10px;
    tr {
      background: #22305a;
      border: 1px solid #ffffff;
      box-shadow: 0px 5px 10px rgba(20, 30, 54, 0.8);
      border-radius: 4px;
    }
  `,
  TableData: styled.td`
    border-top: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};

    &:first-child {
      padding-left: 10px;
      border-left: 1px solid ${colors.white};
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-right: 1px solid ${colors.white};
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  `,
};

export default AdvancedTrading;
