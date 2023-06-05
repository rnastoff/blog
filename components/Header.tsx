import Link from 'next/link';

import NavLinks from './NavLinks';


const Header = () => {
  return (
    <header className="lg:w-[70rem] md:w-[43.5rem] w-[23rem] md:mt-10 mt-5 flex flex-col items-center">

      <Link href={"/?page=1"}>
        <div className="flex lg:h-[72px] md:h-[56px]">
          <span className="bg-primary w-[3px]"></span>
          <span className="bg-primary w-[10px] ml-[7px] md:block "></span>
          <span className="bg-primary w-[15px] ml-[7px] md:block hidden"></span>
          <h1 className="lg:text-6xl md:text-4xl text-lg lg:py-[6px] md:py-[8px] lg:px-14 md:px-7 px-3 bg-primary font-black text-secondary self-center ml-[7px] mr-[7px] ">BUILDING BETTER WORLDS</h1>
          <span className="bg-primary w-[15px] mr-[7px] md:block hidden"></span>
          <span className="bg-primary w-[10px] mr-[7px]  "></span>
          <span className="bg-primary w-[3px]"></span>
        </div>
      </Link>
      <NavLinks />

      {/* <h2
        className="lg:text-7xl text-center text-white font-black lg:w-[60rem] w-[46] lg:text-7xl md:text-5xl text-2xl md:leading-12 leading-2 md:mb-0 mb-1 ">
        WE CAN REMEMBER
        <br />IT FOR YOU WHOLESALE</h2>
      <NavLinks /> */}
    </header>
  )
}

export default Header;