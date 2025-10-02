import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../hooks/useDebounce";
import type { CityResult } from "../types/cityResult";
import SearchDropdown from "./SearchDropdown";

const Hero = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  const [place, setPlace] = useState("");
  const debouncedValue = useDebounce(place, 300);

  const { data } = useQuery({
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
  return (
    <section className="mt-16">
      <h1 className="text-[52px] font-bold text-center p-4 leading-14">
        How's the sky looking today?
      </h1>

      <form
        className="flex gap-2 flex-col mt-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-wrapper relative">
          <input
            onChange={(e) => setPlace(e.target.value)}
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
          <SearchDropdown setPlace={setPlace} cityResult={data || []} />
        </div>
        <button type="submit" className="bg-blue-500 rounded-2xl p-4 text-xl">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
