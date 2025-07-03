import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpenMenu,
  toggleBurgerMenu,
} from "../../store/slices/burgerMenuSlice/burgerMenuSlice";

const BurgerMenuIcon = () => {
  const isOpenBurgerMenu = useSelector(selectIsOpenMenu);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleBurgerMenu());
  };
  return (
    <div
      className={`flex flex-col gap-[6px] cursoer-pointer md:hidden ${
        isOpenBurgerMenu ? "open" : "cursor-pointer"
      }`}
      onClick={toggleMenu}
    >
      <span
        className={`w-[30px] h-[3px] bg-black rounded transition-transform duration-300 ${
          isOpenBurgerMenu ? "transform rotate-45 translate-y-[9px]" : ""
        }`}
      ></span>
      <span
        className={`w-[30px] h-[3px] bg-black rounded transition-opacity duration-300 ${
          isOpenBurgerMenu ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-[30px] h-[3px] bg-black rounded transition-transform duration-300 ${
          isOpenBurgerMenu ? "transform -rotate-45 -translate-y-[9px]" : ""
        }`}
      ></span>
    </div>
  );
};

export default BurgerMenuIcon;
