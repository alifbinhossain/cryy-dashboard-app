import React from 'react';

import clsx from 'clsx';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { BsCheckLg } from 'react-icons/bs';
import TextError from './TextError';

const Checkbox = (props) => {
  const { name, label, labelJsx } = props;
  const { setFieldValue } = useFormikContext();

  return (
    <div>
      <Field name={name}>
        {({ field }) => {
          const checked = field.value;
          return (
            <div
              onClick={() => setFieldValue(name, !field.value)}
              className="flex items-start space-x-2 lg:space-x-3"
            >
              <div
                className={clsx(
                  'flex h-4 w-4 cursor-pointer items-center justify-center rounded-[4px] border-2 lg:h-6 lg:w-6',
                  !checked
                    ? 'border-secondary bg-white'
                    : 'border-transparent bg-secondary text-white '
                )}
              >
                {checked && <BsCheckLg size={12} />}
              </div>
              {label && (
                <label className="text-theme-dark-gray flex-1 text-sm font-medium capitalize lg:text-base">
                  {label}
                </label>
              )}

              {labelJsx && <div className="flex-1">{labelJsx}</div>}
            </div>
          );
        }}
      </Field>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Checkbox;
