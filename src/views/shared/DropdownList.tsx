import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScaleVariants } from '@/services/framer-motion/variants';
import clsx from 'clsx';
import { useFormikContext } from 'formik';

const DropdownList: React.FC<{
  items: { title: string }[];
  activeItem: string;
  setActiveItem: Function;
  formReset?: boolean;
}> = ({ items, activeItem, setActiveItem, formReset }) => {
  const [collapse, setCollapse] = useState(false);
  const { resetForm } = useFormikContext();

  return (
    <div className="relative z-50">
      <label
        className="text-primary flex items-center gap-2 cursor-pointer text-sm"
        onClick={() => {
          setCollapse((current) => !current);
        }}
      >
        <span className="capitalize">{activeItem}</span>
        <img
          className={clsx(
            'transition-all duration-200 ease-in',
            collapse && 'rotate-180'
          )}
          src="/assets/images/icons/down-arrow.svg"
          alt="Down Arrow"
        />
      </label>

      {collapse && (
        <AnimatePresence mode="wait">
          <motion.ul
            className="absolute top-8 right-0  bg-cyan-50  shadow-primary  rounded-lg"
            variants={ScaleVariants}
            initial="init"
            animate="animate"
            exit="exit"
          >
            {items.map((e, index) => {
              return (
                <li
                  className="px-4 pt-3 last:pb-3 cursor-pointer text-sm"
                  onClick={() => {
                    setActiveItem(e.title);
                    setCollapse(false);
                    formReset && resetForm();
                  }}
                  key={index}
                >
                  {e.title}
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
};

export default DropdownList;
