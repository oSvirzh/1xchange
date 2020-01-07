import React from 'react';
import { Card, CardWrapper, CardImage, CardName, Link } from './card';
import passportIcon from '../../../assets/images/passport.svg';
import driversIcon from '../../../assets/images/drivers-license.svg';
import idCardIcon from '../../../assets/images/id-card.svg';

const Cards = () => {
  return (
    <>
      <CardWrapper>
        <Card>
          <CardImage width="60" src={passportIcon} alt="passport" />
          <CardName>Passport</CardName>
        </Card>
        <Card>
          <CardImage width="80" src={idCardIcon} alt="id card" />
          <CardName>ID Card</CardName>
        </Card>
        <Card>
          <CardImage width="80" src={driversIcon} alt="driver`s license" />
          <CardName>Driver`s license</CardName>
        </Card>
      </CardWrapper>
      <Link href="#">I don't have one of these IDs</Link>
    </>
  );
};

export { Cards };
