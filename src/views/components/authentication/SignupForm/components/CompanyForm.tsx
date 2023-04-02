import { FormikControl } from '@/services/formik';

const CompanyForm = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
        <FormikControl
          control="input"
          name="username"
          label="Username"
          inputIcon="/assets/images/icons/user.svg"
        />

        <FormikControl
          control="input"
          name="name"
          label="Name & Lastname"
          inputIcon="/assets/images/icons/email.svg"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <FormikControl
          control="input"
          type="phone"
          name="mobile_number"
          label="Mobile Number"
        />

        <FormikControl
          control="input"
          type="phone"
          name="land_number"
          label="Land Number"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
        <FormikControl
          control="input"
          name="email"
          label="Email"
          inputIcon="/assets/images/icons/email.svg"
        />

        <FormikControl
          control="input"
          type="password"
          name="password"
          label="Password"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
        <FormikControl
          control="input"
          name="company_name"
          label="Company Name"
          inputIcon="/assets/images/icons/building.svg"
        />

        <FormikControl
          control="select"
          name="company_type"
          label="Company Type"
          inputIcon="/assets/images/icons/building.svg"
          title="Select an option"
          options={['E-Commerce', 'Software and IT']}
        />
      </div>
    </div>
  );
};

export default CompanyForm;
