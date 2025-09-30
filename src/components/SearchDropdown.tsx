import clsx from "clsx";
import type { CityResult } from "../types/cityResult";
import useLocation from "../stores/locationStore";

type Props = {
  cityResult: CityResult[];
};
const SearchDropdown = ({ cityResult }: Props) => {
  const { setInfo } = useLocation();
  return (
    <div
      className={clsx(
        "absolute w-full drop-shadow-neutral-800 drop-shadow-md bg-neutral-800 border-neutral-700 border rounded-xl transition p-4",
        { hidden: cityResult.length == 0 }
      )}
    >
      <ul className="space-y-2">
        {cityResult.map((item) => {
          const flagUrl = `https://hatscripts.github.io/circle-flags/flags/${item.country_code.toLowerCase()}.svg`;
          return (
            <li
              className="flex items-center gap-3 hover:bg-neutral-700 hover:border-neutral-600  hover:bordertransition hover rounded-xl p-2 cursor-pointer"
              key={item.id}
              onClick={() => {
                setInfo(
                  item.latitude,
                  item.longitude,
                  `${item.name}, ${item.admin1}`
                );
                console.log(item.latitude, item.longitude);
              }}
            >
              <img src={flagUrl} alt="Flag for" width={32} />
              <span>
                {item.name}, {item.country}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchDropdown;
