import Image from 'next/image';
import Link from 'next/link';
import rn from '../images/rn.svg';

const categories = [
  { name: "BUGS", slug: "bugs" },
  { name: "CRIME", slug: "crime" },
  { name: "FUNNY", slug: "funny" },
  { name: "HARDWARE", slug: "hardware" },
  { name: "INTERNET", slug: "internet" },
  { name: "VIDEO GAMES", slug: "video-games" },
  { name: "DEV", slug: "dev" },
  { name: "WEIRD", slug: "weird" },
];

const NavLinks = () => {

  const categoriesHTML = categories.map((category) => (
    <li className="self-center cursor-pointer list-none text-white hover:text-primary" key={category.slug}>
      <Link className="text-white" key={category.slug} href={`/category/${category.slug}`}>{category.name}</Link>
    </li>
  ))

  return (
    <>
      <nav className="lg:w-[1000px] md:w-[670px] lg:flex md:flex sm:hidden hidden">
        <Image
          src={rn}
          width={50}
          height={50}
          alt="RN Logo"
          className="cursor-pointer lg:mr-5 mr-0"
        />
        <ul className="flex w-full justify-between py-2 lg:px-5 px-2 text-white">
          {categoriesHTML}
        </ul>
      </nav>
      {/* <hr className="w-full md:hidden block " /> */}
    </>


    // <>
    //   <nav className="border-[3px] border-primary w-full lg:flex md:flex sm:hidden hidden ">
    //     <Image src={rn} width={65} height={65} alt="RN Logo" className="border-r-[3px] p-2 border-primary cursor-pointer" />
    //     <ul className="flex w-full justify-between py-2 lg:px-5 px-2 text-white">
    //       {categoriesHTML}
    //     </ul>
    //   </nav>
    //   <hr className="border-2 w-full border-primary md:hidden block " />
    // </>
  )
}

export default NavLinks;