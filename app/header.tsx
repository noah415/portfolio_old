'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function Header() {
  const [transitionResume, setTransitionResume] = useState<boolean>(false);

  const clickResume = () => {
    setTransitionResume(true);
    console.log('clicked');
  };

  return (
    <>
      <div className="flex flex-row justify-between text-gray-400 font-semibold rounded-md">
        <motion.div 
        className="btn-outlined" 
        onClick={clickResume}
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0 , opacity: 1, transition: {duration: 0.7, delay: 0.7, ease: 'backIn'} }}
        exit={{ x: -120, opacity: 0 }}
        >Blog</motion.div>
        <motion.div 
        className="btn-outlined" 
        onClick={clickResume}
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0 , opacity: 1, transition: {duration: 0.7, delay: 0.7, ease: 'backIn'} }}
        exit={{ x: 120, opacity: 0 }}
        >Resume</motion.div>
      </div>
    </>
  );
}