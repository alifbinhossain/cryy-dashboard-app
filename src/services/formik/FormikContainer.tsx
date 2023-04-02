import React from 'react';

import { Formik, FormikConfig } from 'formik';

interface FormikContainerProps extends FormikConfig<any> {
  children: React.ReactNode | any;
}

const FormikContainer: React.FC<
  Pick<
    FormikContainerProps,
    'children' | 'initialValues' | 'onSubmit' | 'validationSchema'
  >
> = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
};

export default FormikContainer;
