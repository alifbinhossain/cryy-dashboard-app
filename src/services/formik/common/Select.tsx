import clsx from 'clsx';
import { ErrorMessage, useFormikContext } from 'formik';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import TextError from './TextError';

const HeightVariants: Variants = {
  init: {
    y: -60,
    opacity: 0,
    z: -10,
  },

  animate: {
    y: 0,
    opacity: 1,
    z: 10,

    transition: {
      ease: 'easeOut',
    },
  },

  exit: {
    y: -60,
    opacity: 0,
    z: -10,
  },
};

const SelectFramer = (props) => {
  const { name, required, options, label, title, inputIcon } = props;
  const [collapseOptions, setCollapseOptions] = useState(false);
  const [checked, setChecked] = useState('');
  const [currentTitle, setCurrentTitle] = useState(title);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="relative">
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

      {inputIcon && (
        <div className="flex sb">
          <img src={inputIcon} alt="" />

          <div
            className="relative z-20 flex items-center justify-between bg-white py-6 pl-7 pr-5"
            onClick={() => setCollapseOptions((current) => !current)}
          >
            <span className="font-poppins text-sm">{currentTitle}</span>
            <button type="button">
              <img src="/assets/images/icons/arrow-down.svg" alt="" />
            </button>
          </div>
        </div>
      )}

      {/* <AnimatePresence mode="wait">
        {collapseOptions && (
          <motion.div
            variants={HeightVariants}
            initial="init"
            animate="animate"
            exit="exit"
          >
            <div className="absolute left-0 right-0 bg-white pl-7 pr-5 shadow-md">
              <ul className="flex flex-col gap-4 border-t border-[#B2B2B2] pt-4 pb-5">
                {options.map((e, index) => (
                  <li
                    onClick={() => {
                      setChecked(e.value);
                      setCurrentTitle(e.name);
                      setFieldValue(name, e.value);
                      setCollapseOptions(false);
                    }}
                    key={index}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    {checked === e.value ? (
                      <div className="h-4 w-4">
                        <img
                          className="h-full w-full"
                          src="/assets/images/icons/checked-icon.svg"
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-[#B2B2B2]"></div>
                    )}

                    <span
                      className={clsx(
                        'font-poppins text-sm ',
                        checked === e.value ? 'text-black' : 'text-[#B2B2B2]'
                      )}
                    >
                      {e.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default SelectFramer;
