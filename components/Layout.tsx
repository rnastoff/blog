import React from 'react';

import { Archivo } from 'next/font/google';

import Header from '../components/Header';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900']
})

const Layout = ({ props, children }: any) => {

  return (
    <>
      <main className={`${archivo.className} min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-dirtbg  `}>
        <div className="flex items-center flex-col">
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;