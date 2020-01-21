import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles/const';
import book from '../../../../assets/images/landing/offers/book.png';
import cart from '../../../../assets/images/landing/offers/cart.png';
import gears from '../../../../assets/images/landing/offers/gears.png';
import libra from '../../../../assets/images/landing/offers/libra.png';

const Offers = () => {
  return (
    <Styled.Wrapper>
        <Styled.Title>
            What exactly are we providing to you?
        </Styled.Title>
        <Styled.Grid>
            <Styled.Item>
                <Styled.ItemImage src={gears} />
                <Styled.ItemDesc>
                    Exchange Aggregation Engine
                </Styled.ItemDesc>
            </Styled.Item>
            <Styled.Item>
                <Styled.ItemImage src={book} />
                <Styled.ItemDesc>
                    All	data aggregation Showing full depth of order book of the crypto markets
                </Styled.ItemDesc>
            </Styled.Item>
            <Styled.Item>
                <Styled.ItemImage src={libra} />
                <Styled.ItemDesc>
                    Global best bid and offer module will be accompanied by 1X Smart Order Routing which means large orders get global best price
                </Styled.ItemDesc>
            </Styled.Item>
            <Styled.Item>
                <Styled.ItemImage src={cart} />
                <Styled.ItemDesc>
                    By virtue of the 1X model, there is no need to maintain API information for each exchange you want to trade on.
                </Styled.ItemDesc>
            </Styled.Item>
        </Styled.Grid>
    </Styled.Wrapper>
  );
};

const Styled = {
    Wrapper: styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    background-color: ${colors.blue};
  `,
    Title: styled.h2`
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
    text-align: center;
    color: ${colors.white};
  `,
    Grid: styled.div`
    margin-top: 100px;
    margin-left: -110px;
    margin-right: -110px;
    padding-left: 223px;
    padding-right: 223px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${colors.white};
  `,
    Item: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(50% - 220px);
    margin: 0 110px;
  `,
    ItemImage: styled.img`
    display: flex;
    flex-wrap: wrap;
    color: ${colors.white};
  `,
    ItemDesc: styled.p`
    margin-top: 20px;
    padding: 0 40px;
    color: ${colors.white};
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    font-weight: 900;
  `,
};

export default Offers;
