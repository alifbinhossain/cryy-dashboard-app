import { FormikContainer, FormikControl } from '@/services/formik';
import React from 'react';
import * as Yup from 'yup';
import { Form } from 'formik';
import Link from 'next/link';
import FormLayout from '@/views/shared/FormLayout';

const initialValues = {
  username: '',
  password: '',
};
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must be at least 8 characters long and contain at least 1 number'
    ),
});
const LoginForm = () => {
  return (
    <FormikContainer
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormLayout pageName="Login">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="flex-1">
            {/* USERNAME INPUT */}
            <FormikControl
              name="username"
              label="Username"
              inputIcon="/assets/images/icons/user.svg"
              control="input"
            />
            <p className="mt-4 text-sm text-alert-gray">
              <span className="text-theme-green">*</span>
              You can login using your phone number as username.
            </p>
          </div>
          <div className="flex-1">
            {/* PASSWORD INPUT */}
            <FormikControl
              name="password"
              label="Password"
              type="password"
              control="input"
            />
            <Link
              href="/"
              className="mt-4 block text-right text-xs font-medium"
            >
              I forgot my password
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 lg:mt-10 lg:flex-row ">
          <p className="space-x-1 text-base font-medium text-alert-gray">
            <span> Don't have an account?</span>
            <Link className="text-theme-green" href="/signup">
              Sign Up
            </Link>
          </p>

          <button
            type="submit"
            className="flex items-center gap-2 bg-theme-green px-16 py-4 text-primary"
          >
            <span>Login</span>
            <img
              src="/assets/images/icons/right-arrow.svg"
              alt="Right Arrow Icon"
            />
          </button>
        </div>

        {/* BUTTON HANDLERS */}
        <div className="mt-8 flex flex-col justify-center gap-4 lg:mt-16 lg:flex-row lg:gap-8">
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-primary px-8 py-4 text-white"
          >
            <img src="/assets/images/icons/apple-icon.svg" alt="Apple Icon" />
            <span> Login With Apple ID</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-primary px-8 py-4 text-white"
          >
            <img src="/assets/images/icons/gmail-icon.svg" alt="Gmail Icon" />
            <span>Login With Gmail</span>
          </button>
        </div>
      </FormLayout>
    </FormikContainer>
  );
};

export default LoginForm;
