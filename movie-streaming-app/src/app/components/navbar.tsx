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
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
    closeMenu();
  };

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link href="/" className='hover:text-[var(--purple-300)]'>Home</Link>
            <Link href="/movies" className='hover:text-[var(--purple-300)]'>Movies</Link>
            <Link href="/tv-shows" className='hover:text-[var(--purple-300)]'>TV Shows</Link>
          </div>
        </div>
        <form onSubmit={handleSearch} className="relative ml-4">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg bg-[var(--white)] text-[var(--black)] border focus:outline-none"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <MagnifyingGlassIcon className="h-5 w-5 text-[var(--black)] hover:text-purple-300" />
            </button>
          </form>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2 rounded-lg p-4 shadow-xl`}
      >
        <div className="flex flex-col space-y-3">
          <Link href="/" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>Home</Link>
          <Link href="/movies" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>Movies</Link>
          <Link href="/tv-shows" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>TV Shows</Link>
          <Link href="/" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>Login</Link>
          <Link href="/movies" className='hover:text-[var(--purple-300)]' onClick={closeMenu}>Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;