import { FormikControl } from '@/services/formik';
import React from 'react';

const IndividualForm = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <FormikControl
          control="input"
          label="Username"
          name="username"
          inputIcon="/assets/images/icons/user.svg"
        />
        <FormikControl
          control="input"
          label="Email"
          name="email"
          inputIcon="/assets/images/icons/email.svg"
        />
      </div>

      <div className="mt-6 flex flex-col lg:flex-row gap-4 lg:gap-8">
        <FormikControl
          control="input"
          type={'phone'}
          label="Mobile Number"
          name="mobile_number"
        />
        <FormikControl
          control="input"
          type="password"
          label="Password"
          name="password"
        />
      </div>
    </div>
  );
};

export default IndividualForm;
