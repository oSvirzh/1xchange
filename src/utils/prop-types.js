import PropTypes from 'prop-types';

export const formikProps = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
};

export const stepsList = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    initialValues: PropTypes.object,
    component: PropTypes.elementType.isRequired,
  })
);
