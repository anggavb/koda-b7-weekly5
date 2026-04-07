import { replace } from 'react-router';
import { DashboardIcon, TransferIcon, HistoryIcon, TopUpIcon, ProfileIcon, LogoutIcon } from '@components/atoms/icons';

const prefix = '/admin'
const handleLogout = (e) => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  if (!confirmLogout) e.preventDefault();

  localStorage.removeItem('credential');
  return replace('/');
}
export default [
  {
    name: 'Dashboard',
    to: `${prefix}`,
    icon: DashboardIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Transfer',
    to: `${prefix}/transfer`,
    icon: TransferIcon,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'History',
    to: `${prefix}/history`,
    icon: HistoryIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Top Up',
    to: `${prefix}/top-up`,
    icon: TopUpIcon,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'Profile',
    to: `${prefix}/profile`,
    icon: ProfileIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Logout',
    to: `/`,
    icon: LogoutIcon,
    onclick: handleLogout,
    class: 'stroke-red-600 group-hover:stroke-red-800',
  },
]