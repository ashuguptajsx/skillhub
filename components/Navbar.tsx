"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch, FaBell, FaShoppingCart, FaHeart, FaUserPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { sign } from 'crypto';
import { useRouter } from 'next/router';

interface NavItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pathname = usePathname();

  

  // Function to navigate to the Sign Up page
  
  const toggleMenu = (): void => setIsOpen(!isOpen);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <motion.nav 
        className="bg-gray-900 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div variants={itemVariants}>
              <Link href="/" className="flex-shrink-0 text-blue-500 text-2xl font-bold">
                SkillHub
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center flex-grow mx-4">
              <form onSubmit={handleSearch} className="relative text-gray-300 w-full max-w-md mx-auto">
                <input
                  type="search"
                  placeholder="Search anything..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="text-gray-500" />
                </button>
              </form>
            </motion.div>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === item.path
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } transition duration-300`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button variants={itemVariants} className="text-gray-300 hover:text-white transition duration-300">
                <FaBell className="w-5 h-5" />
              </motion.button>
              <motion.button variants={itemVariants} className="text-gray-300 hover:text-white transition duration-300">
                <FaShoppingCart className="w-5 h-5" />
              </motion.button>
              <motion.button variants={itemVariants} className="text-gray-300 hover:text-white transition duration-300">
                <FaHeart className="w-5 h-5" />
              </motion.button>
              <motion.button
                
                variants={itemVariants}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center"
              >
                <FaUserPlus className="mr-2" />
                Sign Up
              </motion.button>
            </div>
            <motion.div variants={itemVariants} className="md:hidden flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition duration-300">
                <FaBell className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition duration-300">
                <FaShoppingCart className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition duration-300">
                <FaHeart className="w-5 h-5" />
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.svg
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="md:hidden bg-gray-800 p-4"
      >
        <form onSubmit={handleSearch} className="relative text-gray-300 w-full">
          <input
            type="search"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900"
          />
          <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaSearch className="text-gray-500" />
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-gray-900"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.path
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } transition duration-300`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center"
                  onClick={toggleMenu}
                >
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;