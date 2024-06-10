import React, {useState} from "react";
import GradientButton from "./GradientButton";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
const Hero = () => {
   const [Modalactive, setModalactive] = useState(false);
   const handlealert = () => {
      if (Modalactive === false) {
         setModalactive(true);
      }
   };
   const handleclosemodal = () => {
      setModalactive(false);
   };
   const user = false;
   return (
      <div className={`flex flex-col items-center justify-center relative pt-[9rem] bg-transparent`}>
         {Modalactive ? <Modal closemodal={handleclosemodal} /> : null}
         <h3 className="text-[#cccccc] sora">Proudly built on Zksync</h3>
         <h1 className={` text-5xl px-4 font-[900] leading-none overflow-hidden montserrat tracking-normal md:text-6xl text-center md:tracking-tight py-2 text-[#cccccc] `}>
            <span className="block w-full py-2 leading-12 overflow-hidden tracking-normal lg:inline">Step into the future </span>{" "}
            <span className="py-1 block overflow-y-hidden text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-cyan-500 to-blue-500 "> with Zklion</span>
         </h1>
         <h3 className="text-[#cccccc] sora max-w-[36rem] text-center text-[77%] px-4 md:text-[100%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quae excepturi non quam quasi magni quas obcaecati deleniti delectus nesciunt.
         </h3>
         <br />

         {user ? <Dropdown /> : <GradientButton Triggerfunction={handlealert} Text={"Connect Wallet"} />}
      </div>
   );
};

export default Hero;
