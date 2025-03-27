'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    closeMenu();
  };

  return (
    <nav className="bg-[var(--black)] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between w-full">
          <form onSubmit={handleSearch} className="relative flex-1 mr-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[var(--white)] text-[var(--black)] border-none focus:outline-none"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <MagnifyingGlassIcon className="h-5 w-5 text-[var(--black)]" />
            </button>
          </form>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left Navigation - with same width as right auth */}
          <div className="flex-[3] flex justify-start">
            <div className="flex space-x-8">
              <Link href="/" className='hover:text-[var(--purple-300)] whitespace-nowrap truncate'>Home</Link>
              <Link href="/movies" className='hover:text-[var(--purple-300)] whitespace-nowrap truncate'>Movies</Link>
              <Link href="/tv-shows" className='hover:text-[var(--purple-300)] whitespace-nowrap truncate'>TV Shows</Link>
            </div>
          </div>

          {/* Centered Search - perfectly balanced */}
          <div className="flex-[3] flex justify-center px-4">
            <form onSubmit={handleSearch} className="w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[var(--white)] text-[var(--black)] border-none focus:outline-none focus:ring-2 focus:ring-[var(--purple-300)] whitespace-nowrap truncate"
                />
                <button 
                  type="submit" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 text-[var(--black)] hover:text-[var(--purple-300)]" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Auth - with same width as left nav */}
          <div className="flex-[2] flex justify-end">
            <div className="flex space-x-6">
              <Link href="/" className='hover:text-[var(--purple-300)] whitespace-nowrap truncate'>Login</Link>
              <Link href="/" className='hover:text-[var(--purple-300)] whitespace-nowrap truncate'>Register</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden w-full bg-[var(--black)]">
            <div className="flex flex-col space-y-3 py-3 border-t border-gray-700">
              <Link href="/" className='py-2 hover:text-[var(--purple-300)]' onClick={closeMenu}>Home</Link>
              <Link href="/movies" className='py-2 hover:text-[var(--purple-300)]' onClick={closeMenu}>Movies</Link>
              <Link href="/tv-shows" className='py-2 hover:text-[var(--purple-300)]' onClick={closeMenu}>TV Shows</Link>
              <div className="border-t border-gray-700 pt-3 flex flex-col space-y-3">
                <Link href="/" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>Login</Link>
                <Link href="/" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>Sign Up</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;