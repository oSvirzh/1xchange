import { useEffect, useMemo, useReducer, useCallback } from 'react';

const valuesReducer = (data, { name, value }) => {
  // if name is not provided we will replace all values.
  if (!name) {
    return value;
  }
  return { ...data, [name]: value };
};

/**
 * Hook to handle form values collectioning.
 * @param {Array} steps Array of steps, each item can have `initialValues` object.
 */
export const useStepValues = (steps) => {
  // Allow to collect data from steps into context.
  const initialValues = useMemo(
    () =>
      steps.reduce(
        (values, { initialValues = {} }) => ({
          ...values,
          ...initialValues,
        }),
        {}
      ),
    [steps]
  );

  // reset values in step replacement
  useEffect(() => {
    dispatch({ value: initialValues });
  }, [steps]);

  const [values, dispatch] = useReducer(valuesReducer, initialValues);

  const onInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch({ name, value });
    },
    [dispatch]
  );
  const setFieldValue = useCallback(
    (name, value) => dispatch({ name, value }),
    [dispatch]
  );

  return { values, onInputChange, setFieldValue };
};
