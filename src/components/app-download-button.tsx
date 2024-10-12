type AppDownloadButtonProps = {
  icon: string;
  downloadLocation: string;
};

const AppDownloadButton = ({
  icon,
  downloadLocation,
}: AppDownloadButtonProps) => {
  return (
    <button className="w-[144px] h-auto rounded-[10px] flex bg-black p-2 gap-[5px] text-white text-left">
      <span>
        <img src={icon} alt="icon" />
      </span>
      <span className="leading-[13px]">
        <p className="text-[10px]">Download on the</p>
        <p className="text-[13px] font-bold">{downloadLocation}</p>
      </span>
    </button>
  );
};

export default AppDownloadButton;
