export { PageLayout }

import React from 'react'

function PageLayout({ children }) {
  return (
      <div className="bg-primary-light text-primary min-h-screen h-full w-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          {children}
        </div>
      </div>
  );
}
