export interface SidebarLinksProps {
  title: string;
  link: string;
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
    link: '/account',
    activeIcon: '/assets/images/sidebar-icons/account-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/account-inactive.svg',
    nestedLinks: [
      {
        title: 'Account Information',
        link: '/account/account_information',
        activeIcon: '/assets/images/sidebar-icons/account-info-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/account-info-inactive.svg',
      },
      {
        title: 'Manage Members',
        link: '/account/manage_members',
        activeIcon: '/assets/images/sidebar-icons/members-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/members-inactive.svg',
      },
      {
        title: 'Notifications',
        link: '/account/notifications',
        activeIcon: '/assets/images/sidebar-icons/bell-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/bell-inactive.svg',
      },
      {
        title: 'Extensions',
        link: '/account/extensions',
        activeIcon: '/assets/images/sidebar-icons/extensions-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/extensions-inactive.svg',
      },
      {
        title: 'Security',
        link: '/account/security',
        redirectLink: '/account/security/manage_api_keys',
        activeIcon: '/assets/images/sidebar-icons/security-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/security-inactive.svg',
      },
      {
        title: 'Interactions',
        link: '/account/interactions',
        redirectLink: '/account/interactions/call_history',
        activeIcon: '/assets/images/sidebar-icons/interactions-active.svg',
        inactiveIcon: '/assets/images/sidebar-icons/interactions-inactive.svg',
      },
    ],
  },
  {
    title: 'Reserve  Number',
    link: '/reserve_number',
    activeIcon: '/assets/images/sidebar-icons/reserve-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/reserve-inactive.svg',
  },
  {
    title: 'Storage',
    link: '/storage',
    activeIcon: '/assets/images/sidebar-icons/storage-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/storage-inactive.svg',
  },
  {
    title: 'Billings',
    link: '/billings',
    activeIcon: '/assets/images/sidebar-icons/billings-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/billings-inactive.svg',
  },
  {
    title: 'CRYY Wallet',
    link: '/wallet',
    activeIcon: '/assets/images/sidebar-icons/wallet-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/wallet-inactive.svg',
  },
  {
    title: 'Help',
    link: '/help',
    activeIcon: '/assets/images/sidebar-icons/help-active.svg',
    inactiveIcon: '/assets/images/sidebar-icons/help-inactive.svg',
  },
];
