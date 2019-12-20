import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from '../elements/buttons/Button';

const NextButton = ({ disabled, loading, text, ...props }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      round
      type="submit"
      disabled={isSubmitting || disabled}
      loading={isSubmitting || loading}
      {...props}
    >
      {text}
    </Button>
  );
};

NextButton.propTypes = Button.propTypes;

export { NextButton };
