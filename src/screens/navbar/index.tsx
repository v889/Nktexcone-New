import { useState } from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "@/assets/images/nk2.png";
import { Link } from "react-router-dom";
import { SelectedPage } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';






type Props = {
    selectedPage:SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage:boolean
  };

const Navbar = ({isTopOfPage,setSelectedPage}: Props) => {
    const flexBetween="flex items-center justify-center"
    const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false)
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
     const navbarBackground=isTopOfPage?"":"bg-primary-100 drop=shapow";
    
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-10`}>
            {/* LEFT SIDE */}
            <img h-25 w-25 alt="logo" src={Logo} />
            <div className='flex flex-col'>
            <h1 className='text-xl font-bold '>NK TEXCONE</h1>
            <p>Manufacuturer of High Quality Cones</p>
            </div>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-lg`}>
                <Link to={"/"}>
                Home</Link>
                <Link to={"/about"}>
                About Us</Link>

                <Link to={"/contact"}>
                Contact Us</Link>
                  {/* <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                </div>
                <div className={`${flexBetween} gap-8 m-9`}>
                 
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Contact Now
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Link to={"/"}>
                Home</Link>
                <Link to={"/contact"}>
                About Us</Link>

                <Link to={"/contact"}>
                Contact Us</Link>
            {/* <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar;