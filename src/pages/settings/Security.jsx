import React, { useEffect, useState } from 'react';
import Title from '../../components/elements/typography/Title';
import { Button } from '../../components/elements/buttons/Button';
import ChangePasswordModal from './components/ChangePasswordModal';

const Security = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Title>Change password</Title>
      <Button onClick={() => setShow(true)}>Change password</Button>
      <ChangePasswordModal
        isShowed={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </>
  );
};

export { Security };
