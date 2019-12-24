import PropTypes from 'prop-types';

export const stepsList = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    initialValues: PropTypes.object,
    component: PropTypes.elementType.isRequired,
  })
);
