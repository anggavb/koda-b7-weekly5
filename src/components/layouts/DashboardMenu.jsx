import { Navigation } from '@components';

/**
 * DashboardMenu component that renders the navigation menu for the dashboard layout.
 * @returns {JSX.Element}
 */
function DashboardMenu() {
  return (
    <nav className="min-h-[calc(100vh-56px)] bg-mist-50 border-r border-gray-300 px-4 py-8 flex flex-col gap-2">
      <Navigation to="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-700 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800">
          <path d="M4.92265 4.93523L6.4874 6.5M22 12C22 17.5229 17.5229 22 12 22C6.47715 22 2 17.5229 2 12H22ZM22 12H20H22ZM22 12C22 9.2418 20.8833 6.74435 19.0774 4.93523L22 12ZM2 12H4H2ZM2 12C2 9.24175 3.1167 6.74435 4.92265 4.93523L2 12ZM12 2V4V2ZM12 2C14.7646 2 17.2672 3.12189 19.0774 4.93523L12 2ZM12 2C9.2354 2 6.7328 3.12189 4.92265 4.93523L12 2ZM19.0774 4.93523L17.5126 6.5L19.0774 4.93523Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10V16" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.926 18.098C18.0976 20.4711 15.2273 22 11.9999 22C8.77248 22 5.90218 20.4711 4.07373 18.098C6.41033 16.7629 9.11603 16 11.9999 16C14.8837 16 17.5894 16.7629 19.926 18.098Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Dashboard
      </Navigation>
    </nav>
  )
}

export default DashboardMenu