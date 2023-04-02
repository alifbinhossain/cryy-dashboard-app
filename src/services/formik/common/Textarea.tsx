import React from 'react';

import clsx from 'clsx';
import { ErrorMessage, Field } from 'formik';

import TextError from './TextError';

function Textarea(props) {
  const { label, name, required, placeholder, ...rest } = props;
  return (
    <div className="form-control w-full">
      {(label || required) && (
        <label
          htmlFor={name}
          className={clsx(
            'mb-3 flex select-none items-center gap-1 font-poppins text-base font-normal'
          )}
        >
          {label && <span className="mb-[2px] block pl-[2px]">{label}</span>}
          {required && <span className="mr-1 text-red-400">*</span>}
        </label>
      )}

      <Field name={name}>
        {({ field, form }) => {
          return (
            <div>
              <textarea
                name={name}
                id={name}
                {...field}
                rows="7"
                placeholder={placeholder}
                className={clsx('w-full rounded border')}
                {...rest}
              />
            </div>
          );
        }}
      </Field>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
