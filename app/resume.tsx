import { motion } from 'framer-motion';
import React from 'react';
import { BIO } from './constants';
import ResumeContent from './resumeContent';

interface Props {}

export default function Resume({}: Props) {
  return (
    <div  className="overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 w-fit h-fit overflow-hidden">
        <div className="flex flex-row justify-between text-gray-400 font-semibold rounded-md">
          <motion.div 
          key="blog button"
          className="btn-outlined" 
          animate={{ x: -120, opacity: 0 }}
          initial={{ x: 0 , opacity: 1 }}
          >Blog</motion.div>
          <motion.div 
          key="resume button"
          className="text-white text-7xl absolute left-4 top-12 rounded-2xl" 
          animate={{x: 0, y: 0, transition: { delay: 0.2, duration: 0.7 }, scale: 1 }}
          initial={{ x: "80vw", y: -20, scale: 0.3 }}
          ></motion.div>
        </div>
        <motion.div
        key="title"
        animate={{ y:-230, opacity: 0 }}
        initial={{ y:0 , opacity: 1 }}
        className='nameTitle'>Noah Otsuka</motion.div>
        <motion.div
        key="job title"
        animate={{ y:400, opacity: 0 }}
        initial={{ y:0 , opacity: 1 }}
        className='jobTitle'>Software Engineer</motion.div>
        <motion.div
        key="bio"
        animate={{ y:400, opacity: 0 }}
        initial={{ y:0 , opacity: 1 }}
        className='card-outlined'>{BIO}</motion.div>
      </div> 
      <ResumeContent />
    </div>
  );
}
