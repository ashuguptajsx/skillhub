"use client";
import React, { useState } from "react";
import PaymentModal from "@/components/PaymentModal";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Image from "next/image";
import learning from "./learning.png";
import webDevImage from "./webDev.jpg";
import appDevImage from "./appDev.jpg";
import pythonImage from "./pyhon.jpg";
import aiImage from "./ai.jpg";
import mlImage from "./ml.jpg";
import testimonialImage1 from "./testimonial1.jpg";
import testimonialImage2 from "./testimonial2.jpg";

const Home = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ planType: "", amount: 0 });

  const openPaymentModal = (planType: string, amount: number) => {
    setSelectedPlan({ planType, amount });
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const testimonialSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const ctaSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const ctaItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    },
    tap: {
      scale: 0.95,
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6 md:p-8">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 text-center md:text-left"
              >
                Unlock Your Potential with{" "}
                <span className="text-blue-500">SkillHub</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 text-center md:text-left"
              >
                Empower yourself with cutting-edge skills for the digital age.
                Join our interactive courses and transform your career.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center md:text-left"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white py-3 px-6 md:px-8 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Start Learning
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mt-6 md:mt-0"
            >
              <Image
                src={learning}
                alt="E-learning illustration"
                className="w-full h-auto"
                width={500}
                height={500}
                priority={true}
              />
            </motion.div>
          </div>
        </section>

        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-gray-800"
            variants={itemVariants}
          >
            Featured Courses
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: "Web Development Bootcamp",
                image: webDevImage,
                description:
                  "Master HTML, CSS, JavaScript, and popular frameworks.",
              },
              {
                title: "App Development Mastery",
                image: appDevImage,
                description: "Create stunning mobile apps for iOS and Android.",
              },
              {
                title: "Data Science Fundamentals",
                image: pythonImage,
                description:
                  "Learn Python, data analysis, and visualization techniques.",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <motion.button
                    className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-gray-800"
            variants={itemVariants}
          >
            Why Choose SkillHub?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of experience.",
              },
              {
                title: "Flexible Learning",
                description:
                  "Study at your own pace with on-demand video lessons.",
              },
              {
                title: "Hands-on Projects",
                description:
                  "Apply your skills to real-world projects and build your portfolio.",
              },
              {
                title: "Career Support",
                description:
                  "Get guidance on job searching and interview preparation.",
              },
              {
                title: "Community Forums",
                description:
                  "Connect with peers and instructors for support and networking.",
              },
              {
                title: "Certificates",
                description:
                  "Earn recognized certificates upon course completion.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={testimonialSectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-gray-800"
            variants={testimonialVariants}
          >
            What Our Students Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={testimonialSectionVariants}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Web Developer",
                image: testimonialImage1,
                quote:
                  "SkillHub&apos;s Web Development Bootcamp completely transformed my career. I went from a complete beginner to landing my dream job in just 6 months!",
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                image: testimonialImage2,
                quote:
                  "The Data Science course at SkillHub provided me with the perfect blend of theory and practical skills. I&apos;m now confidently working on complex machine learning projects.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center"
                variants={testimonialVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
                  />
                </motion.div>
                <div>
                  <motion.p
                    className="text-gray-600 italic mb-4"
                    variants={quoteVariants}
                  >
                    &quot;{testimonial.quote}&quot;
                  </motion.p>
                  <motion.p
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <motion.p
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {testimonial.role}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="bg-blue-500 rounded-xl shadow-lg p-8 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaSectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={ctaItemVariants}
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={ctaItemVariants}>
            Join thousands of students who are already transforming their
            careers with SkillHub.
          </motion.p>
          <motion.button
            className="bg-white text-blue-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started Today
          </motion.button>
        </motion.section>
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-gray-800 mt-12"
            variants={sectionVariants}
          >
            Choose Your Plan
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 w-full md:w-1/3 transition-transform duration-300"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-500">
                Monthly Plan
              </h3>
              <p className="text-4xl font-bold text-center mb-6">
                ₹3,000
                <span className="text-xl font-normal text-gray-600">
                  /month
                </span>
              </p>
              <ul className="mb-8">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Access to all courses
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Monthly live Q&A sessions
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Community forum access
                </li>
              </ul>
              <button
                className="w-full bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                onClick={() => openPaymentModal("Monthly", 3000)}
              >
                Subscribe Monthly
              </button>
            </motion.div>
            <motion.div
              className="bg-blue-500 rounded-xl shadow-lg p-8 w-full md:w-1/3 text-white transform scale-105 relative"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-800 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Annual Plan
              </h3>
              <p className="text-4xl font-bold text-center mb-6">
                ₹27,000<span className="text-xl font-normal">/year</span>
              </p>
              <ul className="mb-8">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Access to all courses
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Weekly live Q&A sessions
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Community forum access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  1-on-1 mentoring session
                </li>
              </ul>
              <button
                className="w-full bg-white text-blue-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
                onClick={() => openPaymentModal("Annual", 27000)}
              >
                Subscribe Annually
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SkillHub</h3>
              <p>
                Empowering learners worldwide with cutting-edge skills for the
                digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p>
                SkillHub is dedicated to providing high-quality online education
                in technology, business, and creative fields. Our mission is to
                make professional skills accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-300">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 SkillHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={closePaymentModal}
        planType={selectedPlan.planType}
        amount={selectedPlan.amount}
      />
    </div>
  );
};

export default Home;
