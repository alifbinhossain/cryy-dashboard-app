import React from 'react';
import { Form } from 'formik';

const FormLayout: React.FC<{
  pageName: string;
  children: React.ReactNode;
}> = ({ pageName, children }) => {
  return (
    <Form className="min-h-screen bg-white flex items-center justify-center p-6 lg:py-20 relative">
      <div className="rounded-[22px] bg-white shadow-primary w-[826px] h-max  px-6 py-12 lg:p-20">
        {/* BRAND LOGO */}
        {pageName !== 'Sign Up' && (
          <div className="flex gap-5 justify-center mb-20">
            <div className="h-8 lg:h-11">
              <img
                className="h-full"
                src="/assets/images/logo.png"
                alt="Brand Logo"
              />
            </div>
            <div className=" bg-theme-green w-1 rounded-full" />

            <h5 className="text-lg lg:text-xl font-medium mt-2">{pageName}</h5>
          </div>
        )}

        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 grid grid-cols-2">
        <div className="bg-primary"></div>
        <div className="bg-theme-green"></div>
      </div>
    </Form>
  );
};

export default FormLayout;
