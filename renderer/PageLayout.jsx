export { PageLayout }

import React from 'react'
import { Analytics } from '@vercel/analytics/react';

function PageLayout({ children }) {
  return (
      <div className="bg-black text-white h-full w-full">
        <div className="max-w-screen md:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 overflow-hidden min-h-screen flex flex-col">
          {children}

          <Analytics />
        </div>
      </div>
  );
}
