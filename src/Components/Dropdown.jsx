import React, {useState} from "react";

const Dropdown = () => {
   const [isOpen, setIsOpen] = useState(false);
   let address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
   let mainwalletaddress = address.slice(0, 6) + "...." + address.slice(38, 42);

   return (
      <div className="relative z-80 ">
         <button
            className={`bg-gradient-to-r sora from-cyan-500 to-blue-500 text-[#cccccc] rounded-lg px-4 text-xs border-none py-3 text-[100%] tracking-wide  ${"text-[#121212]"}`}
            onClick={() => setIsOpen(!isOpen)}
         >
            {mainwalletaddress}
         </button>
         {isOpen && (
            <div className=" absolute z-50 mt-1 rounded-lg  shadow-[0px_4px_16px_rgba(0,0,0,0.5),_0px_8px_24px_rgba(0,0,0,0.5),_0px_16px_56px_rgba(0,0,0,0.5)] ">
               <div className="w-full bg-[#00040F] px-4 py-3 text-center sora rounded-lg ">Logout</div>
            </div>
         )}
      </div>
   );
};

export default Dropdown;
