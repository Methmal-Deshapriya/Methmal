import React from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";

const LitUpBordersButton = () => {
  return (
    <button className="p-[3px] cursor-pointer relative">
      <div className="absolute inset-0 bg-transparent rounded-lg" />
      <div className="px-8 py-2   border-2 border-white-100 rounded-full text-sm  relative group transition duration-200 text-white  font-funnel">
        <span>Download CV</span>
        <span></span>
      </div>
    </button>
  );
};

export default LitUpBordersButton;
