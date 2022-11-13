'use client';

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
        <div className="btn-outlined">Blog</div>
        <div className="btn-outlined" onClick={clickResume}>Resume</div>
        {transitionResume && (
          <>transition</>
        )}
      </div>
    </>
  );
}