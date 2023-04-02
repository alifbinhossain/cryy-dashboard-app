import { useOuterClick } from '@/utils/useOuterClick';
import clsx from 'clsx';
import { ErrorMessage, useFormikContext } from 'formik';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useState, useRef } from 'react';
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

const Select = (props) => {
  const { name, required, options, label, title, inputIcon } = props;
  const [collapseOptions, setCollapseOptions] = useState(false);
  const [checked, setChecked] = useState('');
  const { setFieldValue, getFieldProps, errors } = useFormikContext();
  const [currentTitle, setCurrentTitle] = useState(getFieldProps(name).value);
  const listRef = useRef<HTMLDivElement | null>();

  useOuterClick(listRef, () => {
    setCollapseOptions(false);
  });

  return (
    <div className="w-full relative">
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

      {inputIcon ? (
        <div className="w-full flex items-center py-[18px] px-5 border border-[#D4D4D4] rounded-[10px] gap-3 cursor-pointer">
          <img src={inputIcon} alt="" />
          <div
            className="flex-1 relative z-20 flex items-center justify-between"
            onClick={() => setCollapseOptions((current) => !current)}
          >
            <span className="font-lexend text-sm font-normal text-primary">
              {getFieldProps(name).value || title}
            </span>
            <button type="button">
              <img
                className={clsx(
                  'transition-all duration-200 ease-in',
                  collapseOptions && 'rotate-180'
                )}
                src="/assets/images/icons/down-arrow.svg"
                alt="Down Arrow Icon"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full  py-[18px] px-5 border border-[#D4D4D4] rounded-[10px] gap-3 cursor-pointer">
          <div
            className="relative z-20 flex items-center justify-between"
            onClick={() => setCollapseOptions((current) => !current)}
          >
            <span className="font-lexend text-sm font-normal text-primary">
              {getFieldProps(name).value || title}
            </span>
            <button type="button">
              <img
                className={clsx(
                  'transition-all duration-200 ease-in',
                  collapseOptions && 'rotate-180'
                )}
                src="/assets/images/icons/down-arrow.svg"
                alt="Down Arrow Icon"
              />
            </button>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {collapseOptions && (
          <motion.div
            variants={HeightVariants}
            initial="init"
            animate="animate"
            exit="exit"
            ref={listRef}
          >
            <div className="absolute left-0 right-0 mt-1 bg-white pl-7 pr-5 shadow-primary border border-[#D4D4D4] rounded-[10px]">
              <ul className="flex flex-col gap-4  pt-4 pb-5">
                {options.map((e, index) => (
                  <li
                    onClick={() => {
                      setChecked(e);
                      setCurrentTitle(e);
                      setFieldValue(name, e);
                      setCollapseOptions(false);
                    }}
                    key={index}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <span
                      className={clsx(
                        'font-poppins text-sm ',
                        checked === e ? 'text-primary' : 'text-alert-gray'
                      )}
                    >
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {errors[name] && <TextError>{errors[name]}</TextError>}
    </div>
  );
};

export default Select;
