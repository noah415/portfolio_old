'use client';

import { AnimatePresence, motion, usePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BIO } from './constants';

interface Props {
  setIsResume: (isResume: boolean) => void;
}

export default function Landing({setIsResume}: Props) {
  const clickResume = () => {
    console.log('clicked');
  };
  return (
    <div>
      <div className="flex flex-row justify-between text-gray-400 font-semibold rounded-md">
        <motion.div 
        key="blog button"
        className="btn-outlined" 
        onClick={clickResume}
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0 , opacity: 1, transition: {duration: 0.7, delay: 0.7, ease: 'backIn'} }}
        >Blog</motion.div>
        <Link href="/resume">
          <motion.div 
          key="resume button"
          className="btn-outlined" 
          onClick={clickResume}
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0 , opacity: 1, transition: {duration: 0.7, delay: 0.7, ease: 'backIn'} }}
          >Resume</motion.div>
        </Link>
      </div>
      <motion.div
      key="title"
      initial={{ y:-230, opacity: 0 }}
      animate={{ y:0 , opacity: 1, transition: {duration: 0.5} }}
      className='nameTitle'>Noah Otsuka</motion.div>
      <motion.div
      key="job title"
      initial={{ y:400, opacity: 0 }}
      animate={{ y:0 , opacity: 1, transition: {duration: 0.5} }}
      className='jobTitle'>Software Engineer</motion.div>
      <motion.div
      key="bio"
      initial={{ y:400, opacity: 0 }}
      animate={{ y:0 , opacity: 1, transition: {duration: 0.5, delay: 1.2} }}
      className='card-outlined'>{BIO}</motion.div>
  </div>
  );
}
