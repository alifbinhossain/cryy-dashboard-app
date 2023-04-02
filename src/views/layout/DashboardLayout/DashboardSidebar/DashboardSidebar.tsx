import SearchBox from '@/views/shared/SearchBox';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import DashboardSidebarItem from './DashboardSidebarItem';
import { sidebarLinks } from './sidebar-links';

const DashboardSidebar = () => {
  return (
    <aside className="-mt-8 flex-[0_0_290px] rounded-br-[12px] rounded-tr-[12px] bg-white px-6 pt-9 shadow-primary">
      {/* PROFILE INFO */}
      <div className="flex gap-5">
        <div className="h-11 w-11 overflow-hidden rounded-full">
          <img src="/assets/images/dummy-profile.png" alt="Profile Photo" />
        </div>
        <div className="">
          <p className="text-xs font-bold uppercase text-alert-gray">Welcome</p>
          <p className="mt-1 text-sm font-normal text-primary">
            Burcu Akinturk
          </p>
        </div>
      </div>

      {/* Search Box */}
      <SearchBox
        className="mt-5"
        onChange={(e) => {
          console.log(e.currentTarget.value);
        }}
      />

      <ul className="mt-5 flex flex-col gap-1">
        {sidebarLinks.map((e, index) => {
          return <DashboardSidebarItem key={index} item={e} />;
        })}

        <li>
          <button className="flex items-center gap-[10px] py-4 text-sm font-semibold text-alert-gray">
            <img
              src="/assets/images/sidebar-icons/logout.svg"
              alt="Logout Icon"
            />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
