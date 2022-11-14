import React from 'react';
import { motion } from 'framer-motion';

export default function ResumeContent() {
  return (
    <div className="">
      <motion.div 
          key="resume button"
          className="text-white text-7xl pl-2 rounded-2xl" 
          animate={{x: 0, transition: { delay: 0.2, duration: 0.7 }, scale: 1 }}
          initial={{ x: "80vw", y: -20, scale: 0.3 }}
          >Resume</motion.div>
      <motion.div 
      initial={{ x : -100, opacity: 0}}
      animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.4, ease: 'backIn' } }}
      className="border-b border-white w-72" ></motion.div>
      <motion.div className="resumeCategory" >
        Education
      </motion.div>
      <motion.div className="resumeSubCategory" >
        California Polytechnic State University
      </motion.div>
      <motion.ul className="resumeList">
        <li className="resumeItem">Bachelors in Computer Science</li>
        <li className="resumeItem">COVID-19 Independent Study</li>
        <li className="resumeItem">D1 Swimming Scholarship</li>
      </motion.ul>
      <motion.div className="resumeCategory" >
        Skills
      </motion.div>
      <motion.ul className="resumeList">
        <li className="resumeItem">Bachelors in Computer Science</li>
        <li className="resumeItem">COVID-19 Independent Study</li>
        <li className="resumeItem">D1 Swimming Scholarship</li>
      </motion.ul>
      <motion.div className="resumeCategory" >
        Professional Experience 
      </motion.div>
      <motion.div className="resumeSubCategory" >
        StaffWise LLC Software Engineer
      </motion.div>
      <motion.ul className="resumeList">
        <li className="resumeItem">Implementing Clean Architecture design to create productive and scalable software application</li>
        <li className="resumeItem">Collaborating with other engineers to connect REST API backend with web app</li>
        <li className="resumeItem">Using React.js library to implement UI designs created in Figma</li>
        <li className="resumeItem">Creating server middleware, and endpoints using Express.js</li>
      </motion.ul>
      <motion.div className="resumeSubCategory" >
        NetApp Software Engineering Intern 
      </motion.div>
      <motion.ul className="resumeList">
        <li className="resumeItem">Eliminated customer pain points by writing a Python CLI that deploys NetApp storage systems</li>
        <li className="resumeItem">Created organized code base by using OOP and MVVM design pattern</li>
        <li className="resumeItem">Collaborated with other engineers to create a familiar and intuitive UI for customers</li>
      </motion.ul>
    </div>
  );
}
