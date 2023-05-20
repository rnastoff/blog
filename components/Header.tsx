import NavLinks from './NavLinks';


const Header = () => {
  return (
    <header className="lg:w-[62rem] md:w-[46rem] w-[22rem] flex flex-col items-center mt-5">
      <h2 className="lg:text-7xl text-center text-white font-black lg:w-[60rem] w-[46] lg:text-7xl md:text-5xl text-2xl md:leading-12 leading-2 md:mb-0 mb-1 ">WE CAN REMEMBER<br />IT FOR YOU WHOLESALE</h2>
      <NavLinks />
    </header>
  )
}

export default Header;