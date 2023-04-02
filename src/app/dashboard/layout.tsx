'use client';

import DashboardLayout from '@/views/layout/DashboardLayout/DashboardLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
