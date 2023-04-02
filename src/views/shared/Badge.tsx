import clsx from 'clsx';
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: string;
  notifications: number;
  backgroundColor: string;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  icon,
  notifications,
  backgroundColor,
  ...rest
}) => {
  return (
    <button className={clsx('relative h-6 w-6', className)} {...rest}>
      <span
        style={{
          backgroundColor,
        }}
        className="absolute -top-3 -right-2 text-sm h-5 w-5 rounded-full p-1 flex items-center justify-center"
      >
        {notifications}
      </span>
      <img className="w-full h-full" src={icon} alt="Icon" />
    </button>
  );
};

export default Badge;
