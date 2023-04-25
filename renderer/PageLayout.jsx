export { PageLayout }

import React from 'react'

function PageLayout({ children }) {
  return (
<<<<<<< HEAD
      <div className="bg-black text-white h-screen w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
=======
      <div className="bg-primary-light text-primary h-full w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
>>>>>>> 0cc75ae6880ee9358b806c1f76ec8e02a56479db
          {children}
        </div>
      </div>
  );
}
