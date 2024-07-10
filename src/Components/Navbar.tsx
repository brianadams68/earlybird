import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsProfileMenuOpen(false);
    }
  };

  const handleToggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isProfileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleCloseMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
      setIsProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={handleToggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className="h-20 w-auto filter invert"
                  src="/Image/2.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-8 text-sm font-medium text-gray-400 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-8 text-sm font-medium text-gray-400 hover:text-white"
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className="rounded-md px-3 py-8 text-sm font-medium text-gray-400 hover:text-white"
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-3 py-8 text-sm font-medium text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ShoppingCart selectedProducts={[]} removeProduct={function (productId: number): void {
              throw new Error("Function not implemented.");
            } } />
            <div className="relative ml-3" ref={profileMenuRef}>
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileMenuOpen ? "true" : "false"}
                  aria-haspopup="true"
                  onClick={handleToggleProfileMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/Image/profile.JPG"
                    alt=""
                  />
                </button>
              </div>
              {isProfileMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
            onClick={handleCloseMenus}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={handleCloseMenus}
          >
            About
          </Link>
          <Link
            to="/products"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={handleCloseMenus}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={handleCloseMenus}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

