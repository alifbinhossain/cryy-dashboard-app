import { FormikContainer } from '@/services/formik';
import DropdownList from '@/views/shared/DropdownList';
import FormLayout from '@/views/shared/FormLayout';

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import CompanyForm from './components/CompanyForm';
import IndividualForm from './components/IndividualForm';
import {
  initialValuesCompany,
  initialValuesIndividual,
  validationSchemaCompany,
  validationSchemaIndividual,
} from './const';

const SignupForm = () => {
  const [accountType, setAccountType] = useState<'Company' | 'Individual'>(
    'Individual'
  );

  return (
    <FormikContainer
      initialValues={
        accountType === 'Company'
          ? initialValuesCompany
          : initialValuesIndividual
      }
      validationSchema={
        accountType === 'Company'
          ? validationSchemaCompany
          : validationSchemaIndividual
      }
      onSubmit={(values, formik) => {
        console.log(values);
      }}
    >
      <FormLayout pageName="Sign Up">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:mb-20 lg:flex-row">
          <div className="flex gap-5 ">
            <div className="h-8 lg:h-11">
              <img
                className="h-full"
                src="/assets/images/logo.png"
                alt="Brand Logo"
              />
            </div>
            <div className=" w-1 rounded-full bg-theme-green" />

            <h5 className="mt-2 text-lg font-medium lg:text-xl">Sign Up</h5>
          </div>

          <div className="ml-auto">
            <DropdownList
              items={[
                {
                  title: 'Company',
                },
                {
                  title: 'Individual',
                },
              ]}
              activeItem={accountType}
              setActiveItem={setAccountType}
              formReset
            />
          </div>
        </div>

        {accountType === 'Company' ? <CompanyForm /> : <IndividualForm />}

        <div className="mt-6 flex flex-col items-center justify-between gap-4 lg:mt-10 lg:flex-row ">
          <p className="space-x-1 text-base font-medium text-alert-gray">
            <span> Have an account?</span>
            <Link className="text-theme-green" href="/login">
              Login
            </Link>
          </p>

          <button
            type="submit"
            className="flex items-center gap-2 bg-theme-green px-16 py-4 text-primary"
          >
            <span>Sign Up</span>
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

export default SignupForm;
