import React from "react";

const InfoCard = ({ number, info, icon }) => {
  return (
    <div className="min-w-[80%] md:min-w-[400px] h-[250px] card flex flex-col justify-center items-center gap-2 grow text-center rounded-4xl mb-[4%]">
      <img src={icon} alt={icon} width={80} height={80} />
      <div>
        <h4 className="secondary-font text-3xl font-bold">{number}</h4>
        <p className="w-40  primary-font">{info}</p>
      </div>
    </div>
  );
};

export default InfoCard;
