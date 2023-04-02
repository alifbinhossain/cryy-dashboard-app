import Badge from '@/views/shared/Badge';
import Link from 'next/link';
import React from 'react';

const DashboardNavbar = () => {
  return (
    <nav className="bg-primary px-10 pb-14 pt-6 ">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img src="/assets/images/logo-dark.svg" alt="Logo" />
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex cursor-pointer items-center gap-2 border-r border-alert-gray pr-4 ">
            <img
              src="/assets/images/icons/smartphone.svg"
              alt="Smartphone Icon"
            />
            <span className="text-white">+15531718436</span>
            <img
              src="/assets/images/icons/down-arrow-dark.svg"
              alt="Down Arrow"
            />
          </div>
          <Badge
            icon="/assets/images/icons/bell-icon.svg"
            notifications={9}
            backgroundColor="#FFAE35"
          />
          <Badge
            icon="/assets/images/icons/cart-icon.svg"
            notifications={2}
            backgroundColor="#C6DE32"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
