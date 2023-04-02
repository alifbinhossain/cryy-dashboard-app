'use client';

import { store } from '@/services/redux/store/store';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Toaster />
          {children}
        </Provider>
      </body>
    </html>
  );
}
