import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, selectIsOpenMenu } from "../../store/slices/burgerMenuSlice/burgerMenuSlice";
import { NavLink } from "react-router-dom";
import BurgerMenuIcon from "./BurgerMenuIcon";

const BurgerMenu = () => {
  const isOpenBurgerMenu = useSelector(selectIsOpenMenu);
  const dispatch = useDispatch()

  return (
    <>
      {isOpenBurgerMenu && (
        <div className="fixed inset-0 bg-gradient-to-br from-white/40 to-gray-300/30 backdrop-blur-sm z-[998]" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] max-w-full bg-white z-[999] border-l border-black shadow-lg transform transition-transform duration-300 ${
          isOpenBurgerMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <BurgerMenuIcon />
        </div>

        <div className="mb-8 text-center font-bold text-[24px] tracking-[4px] border-b pb-4 border-black">
          МЕГАБИТ
        </div>

        <ul className="flex flex-col gap-4 px-6 text-[18px] font-medium">
          <li>
            <NavLink
              onClick={() => dispatch(closeMenu())}
              to="/"
              className="block w-full py-2 text-black hover:text-white hover:bg-black rounded transition-colors"
            >
              ГЛАВНАЯ
            </NavLink>
          </li>
          <li>
            <NavLink
               onClick={() => dispatch(closeMenu())}
              to="/aboutUs"
              className="block w-full py-2 text-black hover:text-white hover:bg-black rounded transition-colors"
            >
              О НАС
            </NavLink>
          </li>
          <li>
            <NavLink
               onClick={() => dispatch(closeMenu())}
              to="/market"
              className="block w-full py-2 text-black hover:text-white hover:bg-black rounded transition-colors"
            >
              МАГАЗИН
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
