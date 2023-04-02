export interface SidebarLinksProps {
  title: string;
  link: string;
  redirectLink?: string;
  activeIcon: string;
  inactiveIcon: string;
  nestedLinks?: {
    title: string;
    link: string;
    redirectLink?: string;
    activeIcon: string;
    inactiveIcon: string;
  }[];
}

export const sidebarLinks: SidebarLinksProps[] = [
  {
    title: 'Account',
    link: '/dashboard/account',
    redirectLink: '/dashboard/account/account_information',
    activeIcon: '/assets/images/sidebar-icons/account-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/account-inactive.svg',
    nestedLinks: [
      {
        title: 'Account Information',
        link: '/account_information',
        activeIcon: '/assets/images/sidebar-icons/account-info-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/account-info-inactive.svg',
      },
      {
        title: 'Manage Members',
        link: '/manage_members',
        activeIcon: '/assets/images/sidebar-icons/members-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/members-inactive.svg',
      },
      {
        title: 'Notifications',
        link: '/notifications',
        activeIcon: '/assets/images/sidebar-icons/bell-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/bell-inactive.svg',
      },
      {
        title: 'Extensions',
        link: '/extensions',
        activeIcon: '/assets/images/sidebar-icons/extensions-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/extensions-inactive.svg',
      },
      {
        title: 'Security',
        link: '/security',
        redirectLink: '/account/security/manage_api_keys',
        activeIcon: '/assets/images/sidebar-icons/security-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/security-inactive.svg',
      },
      {
        title: 'Interactions',
        link: '/interactions',
        redirectLink: '/account/interactions/call_history',
        activeIcon: '/assets/images/sidebar-icons/interactions-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/interactions-inactive.svg',
      },
    ],
  },
  {
    title: 'Reserve  Number',
    link: '/dashboard/reserve_number',
    activeIcon: '/assets/images/sidebar-icons/reserve-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/reserve-inactive.svg',
  },
  {
    title: 'Storage',
    link: '/dashboard/storage',
    activeIcon: '/assets/images/sidebar-icons/storage-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/storage-inactive.svg',
  },
  {
    title: 'Billings',
    link: '/dashboard/billings',
    activeIcon: '/assets/images/sidebar-icons/billings-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/billings-inactive.svg',
  },
  {
    title: 'CRYY Wallet',
    link: '/dashboard/wallet',
    activeIcon: '/assets/images/sidebar-icons/wallet-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/wallet-inactive.svg',
  },
  {
    title: 'Help',
    link: '/dashboard/help',
    activeIcon: '/assets/images/sidebar-icons/help-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/help-inactive.svg',
  },
];
