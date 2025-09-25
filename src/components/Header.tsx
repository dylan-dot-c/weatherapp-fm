import logo from "../assets/images/logo.svg";
import unitsIcon from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import UnitDropDown from "./UnitDropDown";

const Header = () => {
  return (
    <header className="flex p-4 justify-between items-center absolute w-full left-0 top-0">
      <div>
        <img src={logo} alt="Weather Now Logo" className="max-w-[137.9px]" />
      </div>
      {/* <iframe
        src="https://lottie.host/embed/2fc0668c-5c51-4408-aea8-a35634224c8e/fEHNkpb9Wb.lottie"
        width="100px"
      ></iframe> */}
      <div className="group relative">
        <button
          type="button"
          className="flex gap-2 items-center bg-neutral-800 p-1.5 rounded cursor-pointer hover:bg-neutral-600 transition"
        >
          <img src={unitsIcon} alt="Units Icon" />
          <span className="text-sm">Units</span>
          <span>
            <img src={dropdown} alt="caret-down" />
          </span>
        </button>
        <div className="absolute top-full mt-2 -left-30 w-[214px]  rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 p-1">
          <UnitDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
