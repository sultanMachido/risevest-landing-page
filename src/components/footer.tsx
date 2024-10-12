import riseLogoBlack from "../assets/rise-logo-black.svg";
import angledArrow from "../assets/angled-arrow.svg";

const Footer = () => {
  return (
    <section className="w-full">
      <div className="w-9/12 mx-auto block md:flex gap-[111px]">
        <div className="mt-5 w-full md:w-4/12 flex justify-between">
          <span>
            <img src={riseLogoBlack} alt="rise logo" />
            <ul className="pt-5">
              <li className="py-2">About Us</li>
              <li className="py-2">Careers</li>
              <li className="py-2">FAQs</li>
              <li className="py-2">Contact Info</li>
              <li className="py-2">Press</li>
              <li className="py-2">Rise Impact</li>
            </ul>
          </span>
          <span>
            <p className="font-bold">Explore</p>
            <ul className="pt-5">
              <li className="py-2 flex items-center gap-2">
                Investment Club
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
              <li className="py-2 flex items-center gap-2">
                Blog
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
            </ul>
          </span>
        </div>
        <div className="mt-5 w-full md:w-4/12 flex justify-between">
          <span>
            <p className="font-bold">Products</p>
            <ul className="pt-5">
              <li className="py-2">Rise App</li>
              <li className="py-2">Wallets</li>
              <li className="py-2">Asset Classes</li>
            </ul>
          </span>
          <span>
            <p className="font-bold">Contact Us</p>
            <ul className="pt-5">
              <li className="py-2 flex items-center gap-2">
                0818 714 7405
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
              <li className="py-2 flex items-center gap-2">
                hello@rise.capital
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
              <li className="py-2 flex items-center gap-2">
                Newsletter
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
              <li className="py-2 flex items-center gap-2">
                Instagram
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
              <li className="py-2 flex items-center gap-2">
                Twitter
                <span>
                  <img src={angledArrow} alt="icon" />
                </span>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
