import riseLogo from "../assets/rise-logo.svg";
import arrowDownIcon from "../assets/arrow-down-icon.svg";
import snackbarIcon from "../assets/snackbar.svg";
import closeIcon from "../assets/cancel_x.svg";
import indicatorCircle from "../assets/nav-circle.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  return (
    <nav className="flex w-full lg:w-[80%] mx-auto p-[2rem] justify-between">
      <img src={riseLogo} />
      <div className="hidden lg:block w-[60%]">
        <ul className="flex justify-between text-primary">
          <li>
            <a href="/" className="font-bold">
              Home
            </a>
            <span className="flex justify-center">
              <img src={indicatorCircle} alt="" />
            </span>
          </li>
          <li className="flex">
            <a href="">Products</a>
            <span className="pt-[7px]">
              <img
                src={arrowDownIcon}
                alt="icon"
                className="w-[10px] h-[12px]"
              />
            </span>
          </li>
          <li>
            <a href="">Investment Club</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
        </ul>
      </div>
      <button
        className="block lg:hidden"
        onClick={() => {
          setIsMobileNavVisible(!isMobileNavVisible);
        }}
      >
        {isMobileNavVisible ? (
          <img src={closeIcon} alt="close icon" className="w-[24px]" />
        ) : (
          <img src={snackbarIcon} alt="snack bar icon" />
        )}
      </button>
      {/* mobile navigation */}
      {isMobileNavVisible && (
        <div className="absolute shadow-lg bg-white w-full top-[60px] z-[100] h-auto pl-[10px] pb-[10px]">
          <ul className="text-primary">
            <li>
              <a href="/" className="font-bold">
                Home
              </a>
            </li>
            <li className="flex">
              <a href="">Products</a>
              <img src={arrowDownIcon} alt="icon" />
            </li>
            <li>
              <a href="">Investment Club</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
