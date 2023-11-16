import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/dashboard/app/default', // Diubah agar berawalan /dashboard/app/
    icon: <MdHome className="h-6 w-6" />,
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/dashboard/app/nft-marketplace', // Diubah agar berawalan /dashboard/app/
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   secondary: true,
  // },
  {
    name: 'All Post',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: '/dashboard/app/data-tables', // Diubah agar berawalan /dashboard/app/
  },
  {
    name: 'Users',
    layout: '/admin',
    path: '/dashboard/app/profile', // Diubah agar berawalan /dashboard/app/
    icon: <MdPerson className="h-6 w-6" />,
  },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/dashboard/app/sign-in', // Diubah agar berawalan /dashboard/app/
  //   icon: <MdLock className="h-6 w-6" />,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/dashboard/app/rtl-default', // Diubah agar berawalan /dashboard/app/
  //   icon: <MdHome className="h-6 w-6" />,
  // },
];
export default routes;
