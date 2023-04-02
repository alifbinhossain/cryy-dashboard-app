import * as Yup from 'yup';

export const initialValuesIndividual = {
  username: '',
  email: '',
  mobile_number: '',
  password: '',
};
export const initialValuesCompany = {
  username: '',
  name: '',
  email: '',
  mobile_number: '',
  land_number: '',
  password: '',
  company_name: '',
  company_type: '',
};

export const validationSchemaIndividual = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),
  mobile_number: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/gm,
      'Please enter a valid phone number'
    ),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must be at least 8 characters long and contain at least 1 number'
    ),
});
export const validationSchemaCompany = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  name: Yup.string().required('This field is requried.'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),
  mobile_number: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/gm,
      'Please enter a valid phone number'
    ),
  land_number: Yup.string()
    .required('Land number is required')
    .matches(/^\d+$/, 'Land number must contain only digits')
    .min(1, 'Land number must be at least 1 digit long')
    .max(10, 'Land number must be at most 10 digits long'),

  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must be at least 8 characters long and contain at least 1 number'
    ),
  company_name: Yup.string().required('Company Name is required.'),
  company_type: Yup.string().required('Field is required.'),
});
