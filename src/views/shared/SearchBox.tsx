import clsx from 'clsx';
import React from 'react';

interface SearchBoxProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchBox: React.FC<SearchBoxProps> = ({ className, ...rest }) => {
  return (
    <div className={clsx('relative', className)}>
      <img
        className="absolute top-1/2 -translate-y-1/2 left-4"
        src="/assets/images/icons/search-icon.svg"
        alt="Search Icon"
      />
      <input
        placeholder="Search.."
        className="pl-12 border-none bg-theme-green/[.07] py-3 placeholder:text-primary/50 placeholder:font-semibold "
        {...rest}
      />
    </div>
  );
};

export default SearchBox;
