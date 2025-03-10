"use client";

import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

import googleLogo from '../6929234_google_logo_icon.png';
import microsoftLogo from '../4202105_microsoft_logo_social_social media_icon.png';
import amazonLogo from '../2062062_amazon_buy_logo_online_shop_icon.png';
import facebookLogo from '../9805170_meta_logo_facebook_social media_icon.png';
import appleLogo from '../1298725_apple_logo_icon.png';
import ibmLogo from '../7422428_ibm_hardware_technology_computer_icon.png';
import intelLogo from '../81984_intel_icon.png';
import ciscoLogo from '../294687_cisco_icon.png';
import oracleLogo from '../294664_oracle_icon.png';
import netflixLogo from '../7124274_netflix_logo_icon.png';

const AboutUs: NextPage = () => {
  const placementStats = [
    { number: 5000, description: 'Students Placed' },
    { number: 100, description: 'Partner MNCs' },
    { number: 95, description: 'Placement Rate (%)' },
    { number: 150000, description: 'Highest Package (USD)' },
  ];

  const partnerMNCs = [
    { name: 'Google', logo: googleLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Facebook', logo: facebookLogo },
    { name: 'Apple', logo: appleLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'Intel', logo: intelLogo },
    { name: 'Cisco', logo: ciscoLogo },
    { name: 'Oracle', logo: oracleLogo },
    { name: 'Netflix', logo: netflixLogo },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-indigo-800 sm:text-5xl">
            About SkillHub
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Empowering careers through cutting-edge education and industry partnerships
          </p>
        </motion.div>

        <div className="mt-16">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {placementStats.map((stat) => (
              <motion.div 
                key={stat.description}
                className="bg-white px-8 py-10 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <dt className="order-2 mt-3 text-lg leading-6 font-medium text-gray-600">
                  {stat.description}
                </dt>
                <dd className="order-1 text-6xl font-extrabold text-indigo-600">
                  {stat.number.toLocaleString('en-US')}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="mt-20">
          <motion.h3 
            className="text-3xl font-bold text-indigo-800 mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Partner MNCs
          </motion.h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {partnerMNCs.map((company) => (
              <motion.div 
                key={company.name}
                className="col-span-1 flex justify-center items-center bg-white rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={company.logo} alt={company.name} width={100} height={50} objectFit="contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
