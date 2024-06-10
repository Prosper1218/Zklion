import {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import "../../App.css";
import {Links} from "../../Constants";
import logo from "../../Components/Layout/images/logo.svg";
import Dropdown from "../Dropdown";
import GradientButton from "../GradientButton";
const Nav = () => {
   const [Navactive, setNavactive] = useState(false);
   const navigate = useNavigate();
   const [Scrolled, setScrolled] = useState(false);

   const handlebtnclick = () => {
      if (Navactive === true) {
         setNavactive(false);
      } else {
         setNavactive(true);
      }
   };
   const handlelinkclick = () => {
      if (Navactive === false) {
         return;
      } else {
         setNavactive(false);
      }
   };
   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY;
         if (scrollTop > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   const theme = "dark";
   const user = true;

   return (
      <>
         <nav
            className={`flex justify-between h-[4.5rem] md:h-[6rem] w-[100%] items-center px-4 md:px-8 xl:px-28 fixed  top-0 z-20 ${
               Scrolled ? "bg-gray-100/10" : "bg-transparent"
            }`}
            style={{transition: "ease-in-out 0.3s"}}
         >
            <Link to="/" className="">
               <img src={logo} alt="logo" className="md:w-[8rem] md:h-[6rem] w-[6rem] h-[4rem]" />
            </Link>
            <section
               className={`md:flex justify-center gap-6 md:gap-8 md:px-4 uppercase md:items-center md:text-xs left-0 right-0 bottom-0 md:bg-transparent md:w-auto fixed md:static top-[4.5rem] md:h-screen flex-col md:flex-row font-semibold flex items-start pl-8 transition z-30 nav transform md:translate-x-0 text-n-1  ${
                  Navactive ? "translate-x-0 opacity-100" : "translate-x-[-50rem]"
               }
               ${"bg-[#00040F] text-[#cccccc]"}
               `}
            >
               {Links.map((item) => {
                  return (
                     <NavLink
                        id="link"
                        onClick={handlelinkclick}
                        key={item.id}
                        to={item.to}
                        className={({isActive, isPending}) => (isActive ? "text-cyan-500 md:scale-125" : null)}
                     >
                        {item.name}
                     </NavLink>
                  );
               })}
               {user ? <Dropdown /> : <GradientButton />}
            </section>
            <button type="button" className={`flex md:hidden ham border-[#fe6700] border-2 border-solid rounded-md p-2 z-auto`} onClick={handlebtnclick}>
               {Navactive ? "k" : "j"}
            </button>
         </nav>
      </>
   );
};

export default Nav;
