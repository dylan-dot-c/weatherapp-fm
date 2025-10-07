import Loading from "./Loading";

const LoadingSkeleton = () => {
  return (
    <div className="-z-10">
      <div className="space-y-8 mt-8 lg:mt-12 mb-12 lg:grid lg:grid-cols-7 gap-10 lg:max-h-[693px] lg:gap-8">
        <div className="g col-span-5">
          <div className="flex items-center justify-center h-[286px] w-full bg-neutral-700 rounded-xl flex-col gap-4 animate-pulse">
            <Loading />

            <span>Loading...</span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 pt-10">
            <div className="weather--stats animate-pulse">
              <p>Feels Like</p>
              <span>–</span>
            </div>
            <div className="weather--stats animate-pulse">
              <p>Humidity</p>
              <span>–</span>
            </div>
            <div className="weather--stats animate-pulse">
              <p>Wind</p>
              <span>–</span>
            </div>
            <div className="weather--stats animate-pulse">
              <p>Precipitation</p>
              <span>–</span>
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-[20px] text-neutral-0 font-semibold">
              Daily forecast
            </h3>

            <div className="grid grid-cols-3 gap-4 mt-4 md:grid-cols-7">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-600 bg-neutral-800 aspect-[3/5] flex items-center justify-center animate-pulse"
                >
                  –
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2  bg-neutral-700 rounded-xl animate-pulse p-4">
          <div className="flex justify-between">
            <h3 className="md:text-2xl text-lg font-bold">Hourly forecast</h3>
            <select
              name="loading"
              id="loading"
              className="p-2 rounded-md bg-neutral-600"
            >
              <option value="null">-</option>
            </select>
          </div>
          <div className="space-y-6 mt-4">
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <div
                  className="bg-neutral-600 rounded-2xl h-[60px]"
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Loading /> */}
    </div>
  );
};

export default LoadingSkeleton;
