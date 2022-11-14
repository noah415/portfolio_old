'use client';

import React, { useState } from 'react';
import { AnimatePresence} from 'framer-motion';
import Landing from './landing';

export default function Home() {
  const [isResume, setIsResume] = useState<boolean>(false);

  return (
    <AnimatePresence mode="wait">
      <div className='mainContainer'>
        <Landing key="Landing" setIsResume={() => null} />
      </div>
    </AnimatePresence>
  );
}