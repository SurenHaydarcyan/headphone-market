import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import getPageAnimation from "./getPageAnimation";



const HomeWraper = () => {
  const location = useLocation();
  const animation = getPageAnimation(location.pathname);

  return (
    <>
      <Navbar />
      <BurgerMenu />
  
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default HomeWraper;
