'use client';

import { store } from '@/services/redux/store/store';
import DashboardLayout from '@/views/layout/DashboardLayout/DashboardLayout';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </DashboardLayout>
  );
}
