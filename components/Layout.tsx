import React from 'react';
import Header from './Header';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900']
})

const Layout = ({ children }: any) => {
  return (
    <>
      <main className={`${archivo.className} min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-dirtbg  `}>
        <div className="flex items-center flex-col"> {/* MAIN CONTAINER */}
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;