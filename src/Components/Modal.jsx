import React from "react";

const Modal = ({closemodal}) => {
   return (
      <div
         style={{transition: "ease-in-out"}}
         className="absolute left-0 right-0 transition ease-in-out duration-500 top-[-6rem] bottom-0 h-[100vh] flex flex-col items-center justify-center overflow-y-hidden bg-[#00040F]/80 border-none"
      >
         <div className="min-w-[25rem] transition-all border min-h-[10rem] bg-[#00040F] rounded-md relative ">
            <button onClick={closemodal} className="sora px-2 py-2">
               X
            </button>
            <h3 className="sora text-[#cccccc] text-center mt-4">connect your wallet</h3>

            <button onClick={() => alert("hi")}>hi</button>
         </div>
      </div>
   );
};

export default Modal;
