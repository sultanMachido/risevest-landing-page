import arrowRightIcon from "../assets/arrow-right-icon.svg";

type AssetCardProp = {
  icon: string;
  bgColor: string;
  title: string;
  text: string;
};

const AssetsCard = ({ icon, bgColor, title, text }: AssetCardProp) => {
  return (
    <div className="relative w-[300px] h-[530px] rounded-[5px] border">
      <div className="absolute w-[115px] h-[115px] rounded-[100px] bg-white left-[89px] top-[81px]">
        <img src={icon} className="mx-auto mt-[13px]" />
      </div>
      <div
        className="h-[140px] rounded-t"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="mt-[80px]">
        <h4 className="text-[24px] tracking-[-2px] font-bold text-center">
          {title}
        </h4>
        <div className="h-[163px]">
          <p className="text-center p-[10px]">{text}</p>
        </div>
        <p className="text-center">
          <span className="text-[#919fb5] ">Historical returns:</span> 14% per
          annum
        </p>
        <p className="text-center">
          <span className="text-[#919fb5] text-center">Risk Level:</span> Medium
        </p>
      </div>
      <div className="w-[174px] mt-[24px] mx-auto">
        <a
          href="#"
          className="text-primary flex justify-between  items-center text-[18px] tracking-[-2px]"
        >
          Learn how Stocks work{" "}
          <span>
            <img src={arrowRightIcon} alt="icon" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default AssetsCard;
