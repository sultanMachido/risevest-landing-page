import arrowRightIcon from "../assets/arrow-right-icon.svg";

type InvestmentInfoCardProp = {
  title: string;
  body: string;
};

const InvestmentInfoCard = ({ title, body }: InvestmentInfoCardProp) => {
  return (
    <div className="w-[376px] h-[157px]">
      <h3 className="text-[32px] font-bold tracking-[-3px]">{title}</h3>
      <p className="pr-[4.25rem]">{body}</p>
      <div className="w-[174px] mt-[24px]">
        <a
          href="#"
          className="text-primary flex justify-between  items-center text-[18px] tracking-[-2px]"
        >
          Start Investing Now{" "}
          <span>
            <img src={arrowRightIcon} alt="icon" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default InvestmentInfoCard;
