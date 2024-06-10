import React from "react";
import "../App.css"

const GradientButton = ({Text, Triggerfunction}) => {
   return (
      <button
         onClick={Triggerfunction}
         type="button"
         className={`bg-gradient-to-r sora from-cyan-500 to-blue-500 text-[#cccccc] rounded-lg px-6 border-none py-3 uppercase text-[100%] tracking-wide  ${"text-[#121212]"}`}
      >
         {Text}
      </button>
   );
};

export default GradientButton;
