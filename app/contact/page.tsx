"use client";

import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs: NextPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Head>
        <title>Contact Us - SkillHub</title>
        <meta name="description" content="Get in touch with SkillHub" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <motion.h1
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="mt-4 text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              We&apos;d love to hear from you. Drop us a line and we&apos;ll get
              back to you as soon as possible.
            </motion.p>
          </div>

          <motion.div
            className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <motion.div
                className="lg:self-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center">
                    <FaPhone className="h-6 w-6 text-indigo-500" />
                    <span className="ml-3 text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="h-6 w-6 text-indigo-500" />
                    <span className="ml-3 text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                      support@skillhub.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="h-6 w-6 text-indigo-500" />
                    <span className="ml-3 text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                      123 Learning Street, Education City, 12345
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            >
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
