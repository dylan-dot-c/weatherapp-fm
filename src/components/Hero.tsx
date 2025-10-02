import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../hooks/useDebounce";
import type { CityResult } from "../types/cityResult";
import SearchDropdown from "./SearchDropdown";
import loadingLocations from "../../assets/images/loadingLocations.svg";
// import useUnits from "../stores/unitsStore";
import useEmptyDataStore from "../stores/emptyData";
import useLocation from "../stores/locationStore";

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [place, setPlace] = useState("");
  const debouncedValue = useDebounce(place, 300);
  // const { rainfall, windSpeed, temperature } = useUnits();
  const { setInfo } = useLocation();
  // const queryClient = useQueryClient();
  const { setEmptyData } = useEmptyDataStore();

  const { data, isLoading } = useQuery({
    queryKey: ["cities", debouncedValue],
    queryFn: async () => {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${debouncedValue
          .trim()
          .toLowerCase()}&count=5`
      );
      const res = await response.json();
      if (!response.ok) {
        return [];
        // throw new Error("Failed to get data");
      }
      console.log(res);
      return (res.results as CityResult[]) || [];
    },
    enabled: Boolean(debouncedValue),
  });

  const handleClick = async () => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${place
        .trim()
        .toLowerCase()}&count=5`
    );
    if (!response.ok) alert("Error");

    const res = await response.json();
    console.log(res);
    if (res.results) {
      const results = res.results as CityResult[];
      const info = results[0];
      setPlace(`${info.name} ${info.admin1 ? ", " + info.admin1 : ""}`);
      setInfo(
        info.latitude,
        info.longitude,
        `${info.name} ${info.admin1 ? ", " + info.admin1 : ""}`
      );
    } else {
      setEmptyData(true);
    }
  };
  return (
    <section className="mt-16">
      <h1 className="text-[52px] font-bold text-center p-4 leading-14">
        How's the sky looking today?
      </h1>

      <form
        className="flex gap-2 flex-col mt-8 lg:flex-row relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-wrapper relative">
          <input
            onChange={(e) => {
              setPlace(e.target.value);
              setShowDropdown(false);
            }}
            value={place}
            type="search"
            placeholder="Search for a place..."
            className="bg-neutral-800 p-4 rounded-2xl text-xl w-full pl-12"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute flex items-center left-4 top-0 h-full placeholder:text-neutral-200"
            width={20}
          />
        </div>
        {/* dropdown search */}
        <div className="relative">
          {isLoading && (
            <div className="absolute bg-neutral-800 w-full p-4 rounded-2xl flex gap-4">
              <img
                src={loadingLocations}
                alt="loading asset"
                className="animate-spin"
              />
              <p>Search in progress</p>
            </div>
          )}
          <SearchDropdown
            setShowDropDown={setShowDropdown}
            showDropdown={showDropdown}
            setPlace={setPlace}
            cityResult={data || []}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-2xl p-4 text-xl cursor-pointer transition hover:bg-blue-700"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
