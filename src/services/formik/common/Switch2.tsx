import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import TextError from './TextError';
import clsx from 'clsx';

const Switch2 = (props) => {
  const { label, name, required, info, ...rest } = props;

  const {
    errors,
    values,
    // submitForm,
    setFieldValue,
    // validateField,
    // setFieldTouched,
    // isSubmitting,
  } = useFormikContext();
  // console.log(values);

  return (
    <div className="form-control flex  items-center gap-x-4">
      <label htmlFor="toggleTwo" className="select-none font-medium ">
        {label}
      </label>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div
              className=" relative cursor-pointer"
              onClick={() => setFieldValue(name, !field.value)}
            >
              <input
                {...field}
                {...rest}
                type="checkbox"
                id="toggleTwo"
                className="sr-only"
              />
              <div
                className={clsx(
                  'block h-6 w-10 rounded-full',
                  field.value ? 'bg-secondary' : 'bg-[#E5E7EB]'
                )}
              ></div>
              <div
                className={clsx(
                  'dot absolute top-1 h-4 w-4 rounded-full bg-white duration-500',
                  field.value ? 'right-1' : 'left-1'
                )}
              ></div>
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default Switch2;
