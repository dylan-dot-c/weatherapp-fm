import clsx from "clsx";
import type { CityResult } from "../types/cityResult";
import useLocation from "../stores/locationStore";

type Props = {
  cityResult: CityResult[];
  setPlace: (value: React.SetStateAction<string>) => void;
  showDropdown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchDropdown = ({
  cityResult,
  setPlace,
  showDropdown,
  setShowDropDown,
}: Props) => {
  const { setInfo } = useLocation();
  return (
    <div
      className={clsx(
        "absolute top-0 w-full drop-shadow-neutral-800 drop-shadow-md bg-neutral-800 border-neutral-700 border rounded-xl transition p-4",
        { hidden: cityResult.length == 0 || showDropdown }
      )}
    >
      <div className="space-y-2">
        {cityResult.map((item) => {
          const flagUrl = `https://hatscripts.github.io/circle-flags/flags/${item.country_code.toLowerCase()}.svg`;
          return (
            <button
              className="flex w-full items-center gap-3 hover:bg-neutral-700 hover:border-neutral-600  hover:bordertransition hover rounded-xl p-2 cursor-pointer"
              key={item.id}
              onClick={() => {
                setShowDropDown(true);
                setInfo(
                  item.latitude,
                  item.longitude,
                  `${item.name} ${item.admin1 ? ", " + item.admin1 : ""}`
                );
                console.log(item.latitude, item.longitude);
                setPlace(
                  `${item.name} ${item.admin1 ? ", " + item.admin1 + "\n" : ""}`
                );
              }}
            >
              <img src={flagUrl} alt="Flag for" width={32} />
              <span>
                {item.name}
                {item.admin1 ? ", " + item.admin1 : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchDropdown;
