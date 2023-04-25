export { PageLayout }

import React from 'react'

function PageLayout({ children }) {
  return (
      <div className="bg-black text-white h-screen w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
  );
}
