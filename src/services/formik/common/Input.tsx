import React, { useRef } from 'react';

import clsx from 'clsx';
import { ErrorMessage, Field, useFormikContext } from 'formik';

import TextError from './TextError';
import { useState } from 'react';

const Input = (props) => {
  const {
    label,
    name,
    required,
    info,
    type,
    isLabelModify,
    placeholder,
    inputIcon,
    ...rest
  } = props;
  const [passwordType, setPasswordType] = useState(true);
  const inputRef = useRef<HTMLInputElement>();
  const { errors } = useFormikContext();

  return (
    <div className="w-full text-left">
      {(label || required) && (
        <label
          htmlFor={name}
          className={clsx(
            'mb-2 flex select-none items-center gap-1 font-lexend text-sm font-semibold text-alert-gray'
          )}
        >
          {label && <span>{label}</span>}
          {required && <span className="mr-1 text-red-400">*</span>}
        </label>
      )}

      <Field name={name}>
        {({ field, form, meta }) => {
          return type === 'password' ? (
            <div className="relative">
              <input
                autoComplete="new-password"
                type={passwordType ? 'password' : 'text'}
                ref={inputRef}
                id={name}
                name={name}
                placeholder={placeholder || label}
                {...field}
                className={clsx(
                  `w-full pl-11`,
                  form.errors[name] && form.touched[name] ? '' : ''
                )}
                {...rest}
              />

              <div
                onClick={() => {
                  setPasswordType((current) => !current);
                  setTimeout(() => {
                    inputRef.current.selectionStart =
                      inputRef.current.selectionEnd =
                        inputRef.current.value.length;

                    inputRef.current.focus();
                  }, 0);
                }}
                className="w-5 h-5 absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer"
              >
                {!passwordType ? (
                  <img
                    src="/assets/images/icons/eye-open.svg"
                    alt="Open Eye Icon"
                  />
                ) : (
                  <img
                    src="/assets/images/icons/eye-close.svg"
                    alt="Close Eye Icon"
                  />
                )}
              </div>
            </div>
          ) : inputIcon ? (
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 w-5 h-5">
                <img
                  className="w-full h-full"
                  src={inputIcon}
                  alt="Input Icon"
                />
              </div>
              <input
                type={type}
                ref={inputRef}
                id={name}
                name={name}
                placeholder={placeholder || label}
                {...field}
                className={clsx(
                  `w-full pl-11`,
                  form.errors[name] && form.touched[name] ? '' : ''
                )}
                {...rest}
              />
            </div>
          ) : (
            <input
              type={type}
              ref={inputRef}
              id={name}
              name={name}
              placeholder={placeholder || label}
              {...field}
              className={clsx(
                `w-full`,
                form.errors[name] && form.touched[name] ? '' : ''
              )}
              {...rest}
            />
          );
        }}
      </Field>

      {errors[name] && <TextError>{errors[name]}</TextError>}
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  );
};

export default Input;
