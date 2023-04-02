import React from 'react';

import { useFormikContext } from 'formik';

export default function Submit({
  // formik
  label = 'Submit',
  ...rest
}) {
  const formik = useFormikContext();

  return (
    <div className="ml-auto mt-8  w-max">
      <button
        {...rest}
        type="reset"
        onClick={() => {
          console.log(formik);
          formik.resetForm();
        }}
        className={`border border-primary bg-white py-3 px-6 font-medium  text-black`}
      >
        Reset
      </button>
      <button
        type="submit"
        {...rest}
        className={`cursor-pointer border border-transparent bg-black py-3  px-6 font-medium text-white`}
      >
        {label}
      </button>
    </div>
  );
}
