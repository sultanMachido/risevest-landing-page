import "./App.css";
import Navbar from "./components/navbar";
import phoneImage from "./assets/Phone.png";
import bgCircle1 from "./assets/bg-circle-1.png";
import bgCircle2 from "./assets/bg-circle-2.svg";
import bgCircle3 from "./assets/bg-circle-3.svg";
import bgCircle4 from "./assets/bg-circle-4.svg";
import bgCircle5 from "./assets/bg-circle-5.svg";
import bgSmallCircle from "./assets/bg-small-circle.svg";
import AppDownloadButton from "./components/app-download-button";
import appleIcon from "./assets/apple-icon.svg";
import playstoreIcon from "./assets/playstore-icon.svg";
import sponsors from "./assets/sponsors.svg";
import InvestmentInfoCard from "./components/investment-info-card";
import illustration1 from "./assets/illustration-1.svg";
import illustration2 from "./assets/illustration-2.svg";
import illustration3 from "./assets/illustration-3.svg";
import illustration4 from "./assets/illustration-4.svg";
import AssetsCard from "./components/assets-card";
import assetCardImage1 from "./assets/asset-class-1.png";
import assetCardImage2 from "./assets/asset-class-2.png";
import assetCardImage3 from "./assets/asset-class-3.png";
import buildingWealthPic from "./assets/build-wealth-pic.png";
import Button from "./components/button";
import bgGradient1 from "./assets/bg-gradient-1.png";
import bgGradient2 from "./assets/bg-gradient-2.png";
import bgGradient3 from "./assets/bg-gradient-3.png";
import bgGradient4 from "./assets/bg-gradient-4.png";
import Testimonials from "./components/testimonials";
import communityPic from "./assets/community-pic.png";
import phonePicture from "./assets/download-app-pic.png";
import Footer from "./components/footer";
import mobilePhone from "./assets/mobile-phone.png";
import bubble1 from "./assets/bubble1.svg";
import bubble2 from "./assets/bubble2.svg";
import mobileIllustration1 from "./assets/mobile-illustration-1.svg";
import mobileIllustration2 from "./assets/mobile-illustration-2.svg";
import mobileIllustration3 from "./assets/mobile-illustration-3.svg";
import communityMobilePic from "./assets/community-mobile-pic.png";
import downloadMobilePic from "./assets/download-phone-pic.png";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section className="block lg:flex w-[90%] mx-auto">
        <div className="relative w-full lg:w-6/12">
          <img
            src={bgCircle1}
            alt=""
            className="hidden lg:block absolute top-[53px] left-[0px] lg:left-[116px]"
          />
          <img
            src={bubble1}
            alt=""
            className="block lg:hidden w-[30px] absolute top-[69px] left-[0px] lg:left-[116px]"
          />
          <img
            src={bubble1}
            alt=""
            className="block lg:hidden absolute top-[4px] right-[31px]"
          />
          <div className="w-[347px] lg:w-[491px]">
            <h2 className="font-bold text-primary tracking-[-5px] text-[40px] lg:text-[56px] pt-[42px] lg:pt-[121px] px-[42px] lg:px-[50px] leading-[30px] lg:leading-[60px] relative">
              Dollar investments that help you grow
              <span className="absolute bottom-[14px] lg:bottom-[32px] right-[39px]">
                <img src={bgSmallCircle} />
              </span>
            </h2>
            <p className="hidden lg:block pr-[65px] pl-[50px] pt-[16px]">
              We put your money in high quality assets that help you build
              wealth and achieve your financial goals.
            </p>
            <p className="block lg:hidden text-center px-[46px] pt-[16px]">
              Your personal wealth manager. Get started with a minimum of $10
              and
            </p>
            <div className="flex gap-2 mt-[32px] ml-[30px] lg:ml-[50px]">
              <AppDownloadButton
                icon={appleIcon}
                downloadLocation="App Store"
              />
              <AppDownloadButton
                icon={playstoreIcon}
                downloadLocation="Google Play"
              />
            </div>
          </div>
          <img
            src={bgCircle2}
            alt=""
            className="hidden lg:block absolute bottom-[-56px] left-[177px]"
          />
        </div>
        <div className="hidden  relative w-6/12 lg:flex justify-center">
          <img
            src={bgCircle3}
            alt=""
            className="absolute top-[0px] left-[0px]"
          />
          <img src={phoneImage} className="pt-[36px]" />
          <img
            src={bgCircle4}
            alt=""
            className="absolute bottom-[-26px] left-[177px]"
          />
          <img
            src={bgCircle5}
            alt=""
            className="absolute bottom-[-26px] left-[450px]"
          />
        </div>
        <div className="block lg:hidden w-full flex justify-center relative">
          <img
            src={bubble2}
            alt=""
            className="absolute top-[66px] left-[62px] z-[-1]"
          />
          <img
            src={bubble2}
            alt=""
            className="absolute w-[20px] top-[223px] left-[12px] "
          />
          <img
            src={bubble2}
            alt=""
            className="absolute top-[143px] right-[32px]"
          />
          <img
            src={bubble2}
            alt=""
            className="absolute bottom-[34px] left-[43px] "
          />
          <img src={mobilePhone} className="pt-[36px] z-10" />
        </div>
      </section>

      <section className="flex justify-center mt-[60px] w-full">
        <div className="w-[80%] mx-auto lg:w-[35%]">
          <p className="visible lg:hidden font-bold text-[#7B8DA8] text-[18px]">
            We are supported by
          </p>
          <img src={sponsors} alt="sponsors icon" />
        </div>
      </section>

      <section className="hidden lg:block w-[75%] mx-auto">
        <div className="flex items-center gap-[9.813rem]">
          <InvestmentInfoCard
            title="Invest your money in dollars"
            body="By holding your investments in a stable currency, your money grows more over time and retains its value better."
          />
          <img src={illustration1} alt="illustration" />
        </div>
        <div className="flex items-center gap-[9.813rem]">
          <img src={illustration2} alt="illustration" />
          <InvestmentInfoCard
            title="Choose what's best for you"
            body="Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place."
          />
        </div>
        <div className="flex items-center gap-[9.813rem]">
          <InvestmentInfoCard
            title="Set goals and reach them"
            body="You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them."
          />
          <img src={illustration3} alt="illustration" />
        </div>
        <div className="flex items-center gap-[9.813rem]">
          <img src={illustration4} alt="illustration" />
          <InvestmentInfoCard
            title="We remember so you dont  have to"
            body="Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule."
          />
        </div>
      </section>

      <section className="block lg:hidden w-[75%] mx-auto">
        <div>
          <img src={mobileIllustration1} alt="illustration" />
          <h3 className="font-bold text-[20px] tracking-[-2px] text-center">
            Superior Performance
          </h3>
          <p className="text-center">
            Rise outperforms your other alternatives in two ways. The first is
            through our expert, algorithm driven investment approach that picks
            through over 3,000 data sets to find the perfect investment for you.
          </p>
        </div>
        <div>
          <img src={mobileIllustration2} alt="illustration" />
          <h3 className="font-bold text-[20px] tracking-[-2px] text-center">
            Personalization
          </h3>
          <p className="text-center">
            No two people are the same, and everyone’s financial goals are
            different. Rise understands this, which is why we tailor your
            journey to financial freedom to fit you.
          </p>
        </div>
        <div>
          <img src={mobileIllustration3} alt="illustration" />
          <h3 className="font-bold text-[20px] tracking-[-2px] text-center">
            Diversification
          </h3>
          <p className="text-center">
            Rise offers a choice of three asset classes: US equities, US real
            estate and fixed income assets to provide stability to your
            investments and protection from market declines. You can pick one
            asset class or
          </p>
        </div>
      </section>

      <section className="mt-[144px] w-full lg:w-[80%] mx-auto pb-10">
        <h3 className="text-[32px] font-bold tracking-[-3px] text-center">
          Asset Classes
        </h3>
        <p className="text-[16px] text-center">
          It's your money, choose where you invest it
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-[46px] w-[86%] mx-auto mt-[42px]">
          <AssetsCard
            icon={assetCardImage1}
            bgColor="#FFF4F0"
            title="Stocks"
            text="We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.
            "
          />
          <AssetsCard
            icon={assetCardImage2}
            bgColor="#F6F2FF"
            title="Real Estate"
            text="Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US."
          />
          <AssetsCard
            icon={assetCardImage3}
            bgColor="#ECFEFE"
            title="Fixed Income"
            text="A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.
            "
          />
        </div>
      </section>

      <section className="hidden  w-[70%] mx-auto lg:flex gap-[160px] items-center">
        <img src={buildingWealthPic} alt="picture of a phone" />
        <div>
          <p className="text-[18px] font-[500] tracking-[-2px]">The Rise App</p>
          <h3 className="text-[40px] font-[600] tracking-[-2px]">
            Save for your <span className="text-[#8c5ff8]">future</span>
          </h3>
          <p className="pr-[73px]">
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children’s future and more.
          </p>
          <Button style="mt-[32px] rounded-[5px] text-center py-[12px] px-[32px] bg-[#07969E] text-white">
            Start Saving
          </Button>
        </div>
      </section>

      <section className="flex justify-between mt-[47px] items-center">
        <div>
          <img src={bgGradient1} alt="background gradient" />
          <img src={bgGradient2} alt="background gradient" />
        </div>
        <div className="absolute lg:relative">
          <h3 className="text-center font-bold tracking-[-3px] text-[32px] lg:text-[40px]">
            How we are Regulated
          </h3>
          <div className="w-auto lg:w-[504px]">
            <p className="hidden lg:block text-center ">
              Rise is registered and regulated both in the US and in Nigeria.
              Our team is made up of US registered investment advisers, our
              Nigerian users are covered by our SEC licensed trustees, ARM
              Trustees and all our assets are held with regulated third parties,
              in all relevant jurisdictions
            </p>
            <p className="block lg:hidden text-center px-[2.2rem]">
              Rise is registered and regulated both in the US and in Nigeria.
              The founder is registered as an investment adviser with the US
              SEC. The Nigerian SEC regulates Rise's Nigerian investments
              through a trusteeship agreement with ARM Trustees, who oversees
              investments on behalf of the users. And a registered investment
              subsidiary holds all users' assets regulated in the US
            </p>
          </div>
        </div>
        <div>
          <img src={bgGradient3} alt="background gradient" />
          <img src={bgGradient4} alt="background gradient" />
        </div>
      </section>

      <section className="mt-[80px] pb-[50px]">
        <h3 className="hidden lg:block text-center text-[#40BBC3] tracking-[-3px] font-bold text-[40px] pt-[17px]">
          From The People Who Use Rise
        </h3>
        <p className="hidden lg:block text-center w-[502px] mx-auto">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>

        <h3 className="block leading-[28px] lg:hidden text-center text-[#40BBC3] tracking-[-3px] font-bold text-[32px] pt-[17px]">
          What our customers <br /> are saying
        </h3>
        <p className="block lg:hidden text-center pt-[16px]">
          We serve over 80,000 amazing users.
        </p>
        <Testimonials />
      </section>

      <section className="hidden  w-[80%] mx-auto lg:flex items-center gap-[90px] mt-[103px] mb-[102px]">
        <div>
          <h3 className="tracking-[-3px] font-bold text-[40px]">
            Join The Rise Community
          </h3>
          <div className="w-[478px]">
            <p>
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It's completely
              free and open to new and seasoned investors.
            </p>
          </div>
          <Button style="bg-[#A0DDE2] rounded-[5px] mt-[32px] px-[31px] py-[12px]">
            Join our Community
          </Button>
        </div>
        <img src={communityPic} alt="community of people" />
      </section>

      <section className="lg:hidden w-[80%] mx-auto block mt-[25px] mb-[102px]">
        <img src={communityMobilePic} alt="community of people" />
        <div className="mt-[33px]">
          <h3 className="tracking-[-3px] font-bold text-[32px] leading-[28px] text-center">
            Join The Rise <br /> Community
          </h3>
          <p className="text-center">If you want to go far, go together.</p>
          <div className="flex justify-center">
            <Button style="bg-[#A0DDE2] rounded-[5px] mt-[32px] px-[31px] py-[12px]">
              Join our Community
            </Button>
          </div>
        </div>
      </section>

      <section className="w-[90%] lg:w-[80%] mb-[80px] mx-auto bg-[#ECFEFE] rounded-[50px] block lg:flex items-center justify-between pr-[0px] lg:pr-[114px] pl-[24px]">
        <div>
          <p className="text-center lg:text-left pt-[41px] lg:pt-[0px] text-[#07969E]">
            Download The Rise App
          </p>

          <h3 className="text-center lg:text-left tracking-[-2px] font-bold text-[20px] lg:text-[32px] leading-[24px] lg:leading-[38px] py-[16px]">
            Join our 100,000 users investing
            <br /> and setting long term goals!
          </h3>

          <p className="text-center lg:text-left">
            Dollar investments that help you grow.
          </p>

          <div className="flex gap-2 mt-[32px]">
            <AppDownloadButton icon={appleIcon} downloadLocation="App Store" />
            <AppDownloadButton
              icon={playstoreIcon}
              downloadLocation="Google Play"
            />
          </div>
        </div>
        <div className="flex justify-center lg:block">
          <img
            src={phonePicture}
            alt="picture of a phone"
            className="pt-[10px] hidden lg:block"
          />
          <img
            src={downloadMobilePic}
            alt="picture of a phone"
            className="pt-[10px] block lg:hidden"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
