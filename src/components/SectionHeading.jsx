import React from "react";
import icon from "@/images/general/olive-icon.png"
import Image from "next/image";

const SectionHeading = ({title}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <Image src={icon} alt="Leaf Icon" />
      </div>
      <h2 className="text-[#434343] text-[24px] font-medium tracking-[0.2px] mt-4">
        {title}
      </h2>
      <div className="w-[100px] h-[3px] bg-green-600 mx-auto my-2"></div>
    </div>
  );
};

export default SectionHeading;
