import { FormikContainer, FormikControl } from '@/services/formik';
import FormLayout from '@/views/shared/FormLayout';

import React from 'react';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email.'),
});

const ResetForm = () => {
  return (
    <FormikContainer
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormLayout pageName="Reset Password">
        <button
          type="button"
          className="absolute left-12 top-10 flex items-center gap-2 text-sm"
        >
          <img
            src="/assets/images/icons/left-arrow.svg"
            alt="Left Arrow Icon"
          />
          <span> Back</span>
        </button>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 ">
          <div className="flex-1">
            <FormikControl
              control="input"
              inputIcon="/assets/images/icons/user.svg"
              name="username"
              label="Username"
            />
            <p className="mt-4 text-sm text-alert-gray">
              <span className="text-theme-green">*</span>
              Username may also be your account phone number
            </p>
          </div>

          <div className="flex-1">
            <FormikControl
              control="input"
              name="email"
              label="Email"
              inputIcon="/assets/images/icons/email.svg"
            />
          </div>
        </div>

        <button className=" mx-auto mt-16 flex items-center justify-center gap-2 bg-theme-green px-20 py-4 text-primary">
          <img src="/assets/images/icons/reload.svg" alt="Reload Icon" />
          <span>Reset</span>
        </button>
      </FormLayout>
    </FormikContainer>
  );
};

export default ResetForm;
