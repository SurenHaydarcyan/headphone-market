

import NavMenuItem from "./NavMenuItem";


const NavMenu = () => {
  return (
    <>
      <ul className="flex items-center gap-[10px] max-md:hidden ">
        <NavMenuItem name="ГЛАВНАЯ" path="/" />
        <NavMenuItem name="О НАС" path="/aboutUs" />
        <NavMenuItem name="МАГАЗИН" path="/market" />
      </ul>

    </>
  );
};

export default NavMenu;

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="5.7 0 105.5 126.1"
  preserveAspectRatio="xMinYMax meet"
  data-hook="svg-icon-1"
>
  <path d="M99.8 28.4c0-1.2-.9-2-2.1-2h-15v8.2c0 1.5-1.2 2.6-2.6 2.9-1.5.3-2.9-.9-3.2-2.3v-8.8H40.1v8.2c0 1.5-1.2 2.9-2.6 2.9-1.5 0-2.9-.9-3.2-2.3v-8.8h-15c-1.2 0-2 .9-2 2l-9 95.6c0 1.2.9 2.1 2.1 2.1h96.3c1.2 0 2.1-.9 2.1-2.1z" />
  <path d="M59.1 5.9h-2.9c-2 0-4.4.6-6.4 1.5-3.2 1.5-5.9 4.1-7.6 7.3-.9 1.8-1.5 3.5-1.8 5.6 0 .9-.3 1.5-.3 2.3v3.2c0 1.5-1.2 2.9-2.6 2.9-1.5 0-2.9-.9-3.2-2.3v-4.1c0-3.2.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5.3 55 0 56.7 0h4.4C64 0 66.7.6 69 1.8c2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1.3 1.5.6 3.2.6 4.7v3.2c0 1.5-1.2 2.6-2.6 2.9s-2.9-.9-3.2-2.3v-4.4c0-2.3-.6-4.4-1.8-6.4-1.5-3.2-4.1-5.9-7.3-7.3-1.8-.9-3.5-1.8-5.9-1.8z" />
</svg> */
}
