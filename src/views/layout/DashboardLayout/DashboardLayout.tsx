import React from 'react';
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNavbar />

      <main className="mr-8 flex h-full flex-1 gap-5">
        <DashboardSidebar />
        <div className="-mt-8 flex-1">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
