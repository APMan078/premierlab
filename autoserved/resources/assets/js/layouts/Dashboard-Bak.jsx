import React from 'react'
import MaterialIcon from '@material/react-material-icon';
import { AppHeader, AppFooter, AppSidebar, AccountDropdown } from 'components'

export const DashboardLayout = props => (
<div className="mx-auto bg-gray-300">
  <div className="min-h-screen flex flex-col">
    <div className="flex flex-1">

      <main className="bg-white-medium flex-1 overflow-hidden">
        <header className="bg-white h-14 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
          <div className="flex items-center justify-between px-4 py-3 sm:p-0">
            <div className="sm:hidden">
              <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
              </button>
            </div>
          </div>
          <nav className="sm:block">
            <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
              <a href="#" className="block px-2 py-1 text-gray font-semibold rounded hover:bg-gray-800">List your property</a>
              <a href="#" className="mt-1 block px-2 py-1 text-gray font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
              <a href="#" className="mt-1 block px-2 py-1 text-gray font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a>
              <AccountDropdown />
            </div>
            <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
              <div className="flex items-center">
                <img className="h-8 w-8 border-2 border-gray-600 rounded-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar" />
                <span className="ml-3 font-semibold text-gray">Jane Doe</span>
              </div>
              <div className="mt-4">
                <a href="#" className="block text-gray-400 hover:text-gray">Account settings</a>
                <a href="#" className="mt-2 block text-gray-400 hover:text-gray">Support</a>
                <a href="#" className="mt-2 block text-gray-400 hover:text-gray">Sign out</a>
              </div>
            </div>
          </nav>
        </header>
        <div className="flex flex-col">
          <div className="max-w-2xl mx-auto mt-10 px-4">{props.children}</div>
        </div>
        <footer className="bg-gray-900 text-white p-2">
            <div className="flex flex-1 mx-auto">© My Design</div>
        </footer>
      </main>
    </div>
  </div>
</div>
)
