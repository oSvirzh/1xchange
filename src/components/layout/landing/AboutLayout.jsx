import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import Header from './header/Header';
import Footer from './footer/Footer';
import background from '../../../assets/images/landing/background.png';
import banner from '../../../assets/images/banner.jpg';
import aboutImage from '../../../assets/images/about-image.png';
import { colors } from '../../../styles/const';

const AboutLayout = () => {
  return (
    <Styled.AboutLayout>
      <Header />
      <Styled.Parallax>
        <Container>
          <Row>
            <Styled.PageName>About us</Styled.PageName>
          </Row>
        </Container>
      </Styled.Parallax>
      <Styled.CardsWrapper>
        <Container>
          <Row>
            <Styled.AboutCards>
              <Styled.AboutCard>
                Finxflo is a global network exchange aggregator that allows
                users to trade cryptocurrency at aggregated maker and taker
                prices thereby obtaining the best prices possible.
              </Styled.AboutCard>
              <Styled.AboutCard>
                Our innovative and intuitive technology, rooted in a secure and
                reliable platform, enables users to take advantage of the low
                trading fees normally reserved for institutional traders,
                thereby maximising profitability at both ends.
              </Styled.AboutCard>
              <Styled.AboutCard>
                We are on a mission to consign liquidity issues to the history
                books and bring transparency and equality of opportunity to the
                crypto-markets like that never seen before.
              </Styled.AboutCard>
              <Styled.AboutCard>
                Through our exchange aggregator we will establish a level
                playing field for crypto-traders throughout the world; put
                simply, we will make the crypto-trading world a better place.
              </Styled.AboutCard>
            </Styled.AboutCards>
          </Row>
        </Container>
      </Styled.CardsWrapper>
      <Styled.Unique>
        <Container>
          <Row>
            <Styled.UniqueTitle>
              Unique Positioning of Finxflo
            </Styled.UniqueTitle>
            <Styled.UniqueBody>
              <Styled.UniqueList>
                <Styled.UniqueItem>One Wallet</Styled.UniqueItem>
                <Styled.UniqueItem>One KYC</Styled.UniqueItem>
                <Styled.UniqueItem>Lower Trading Fees</Styled.UniqueItem>
                <Styled.UniqueItem>No withdrawal Fees</Styled.UniqueItem>
                <Styled.UniqueItem>Better Execution</Styled.UniqueItem>
                <Styled.UniqueItem>Unique user experience</Styled.UniqueItem>
                <Styled.UniqueItem>
                  Global best bid best offer
                </Styled.UniqueItem>
              </Styled.UniqueList>
              <Styled.AboutImage src={aboutImage} alt="" />
            </Styled.UniqueBody>
          </Row>
          <Row>
            <Styled.UniqueTitle>The Finxflo Solution</Styled.UniqueTitle>
            <Styled.SolutionsList>
              <Styled.UniqueList>
                <Styled.SolutionTitle>
                  Benefits to Retail Traders
                </Styled.SolutionTitle>
                <Styled.UniqueItem>
                  Provides immediate trading access
                </Styled.UniqueItem>
                <Styled.UniqueItem>Automatic price discovery</Styled.UniqueItem>
                <Styled.UniqueItem>
                  Institutional-like trading fees
                </Styled.UniqueItem>
                <Styled.UniqueItem>Access to liquidity</Styled.UniqueItem>
                <Styled.UniqueItem>
                  Trade with confidence and legitimacy
                </Styled.UniqueItem>
              </Styled.UniqueList>
              <Styled.UniqueList>
                <Styled.SolutionTitle>Dark Pool</Styled.SolutionTitle>
                <Styled.UniqueItem>Robust Trading rule book</Styled.UniqueItem>
                <Styled.UniqueItem>
                  Protection from front running
                </Styled.UniqueItem>
                <Styled.UniqueItem>
                  Smart order routing, automatic best price
                </Styled.UniqueItem>
                <Styled.UniqueItem>KYC and AML procedures</Styled.UniqueItem>
              </Styled.UniqueList>
            </Styled.SolutionsList>
          </Row>
        </Container>
      </Styled.Unique>
      <Footer />
    </Styled.AboutLayout>
  );
};

const Styled = {
  AboutLayout: styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    background-image: url(${background});
    background-size: cover;
  `,
  Banner: styled.div`
    height: 300px;
  `,
  Parallax: styled.div`
    padding-top: 128px;
    padding-bottom: 32px;
    color: #fff;
    background-image: url('${banner}');
    height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`,
  PageName: styled.h1`
    font-size: 72px;
    color: #fff;
    text-align: right;
  `,
  CardsWrapper: styled.div``,
  AboutCards: styled.ul`
    counter-reset: myCounter;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px 0;
  `,
  AboutCard: styled.li`
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    width: 385px;
    border: solid 3px #eda334;
    padding: 24px 12px;
    margin-top: 50px;

    &:before {
      content: counter(myCounter);
      counter-increment: myCounter;
      position: absolute;
      display: flex;
      justify-content: center;
      top: 0;
      left: 50%;
      width: 49px;
      font-size: 28px;
      transform: translate(-50%, -50%);
      border: solid 3px #eda334;
      border-radius: 100%;
      background-color: #11192b;
    }
  `,
  Unique: styled.div`
    padding-top: 30px;
    padding-bottom: 100px;
    position: relative;
    background-color: ${colors.lightblue};
  `,
  AboutImage: styled.img`
    max-width: 400px;
  `,
  UniqueList: styled.ul``,
  UniqueItem: styled.li`
    display: block;
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
    &:before {
      content: '✔';
      margin-right: 16px;
      color: #eda334;
      font-size: 0.8em;
      padding: 0.2em 0.45em 0.2em 0.45em;
      border: solid 3px #eda334;
      border-radius: 100%;
    }
  `,
  UniqueBody: styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 32px;
  `,
  UniqueTitle: styled.h3`
    color: #fff;
    font-size: 32px;
    width: 100%;
    text-align: center;
    margin-top: 45px;
  `,
  Solutions: styled.div``,
  SolutionsList: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
  `,
  SolutionTitle: styled.h4`
    color: #fff;
    font-size: 20px;
  `,
};

export default AboutLayout;
