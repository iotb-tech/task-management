
const InfoCard = ({ number, info, icon }) => {
  return (
    <div className="w-full sm:w-[300px] min-h-[200px] px-4 py-6 card shadow-md rounded-3xl flex flex-col justify-center items-center text-center gap-3 transition-all duration-300 mb-6">
      <img
        src={icon}
        alt="icon"
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
      />
      <div>
        <h4 className="secondary-font text-2xl sm:text-3xl font-bold">
          {number}
        </h4>
        <p className="primary-font text-sm sm:text-base max-w-[10rem] mx-auto">
          {info}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
