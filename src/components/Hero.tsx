import searchIcon from "../assets/images/icon-search.svg";

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-[52px] font-bold text-center p-4 leading-14">
        How's the sky looking today?
      </h1>

      <form className="flex gap-2 flex-col mt-8">
        <div className="input-wrapper relative">
          <input
            type="text"
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
        <button type="submit" className="bg-blue-500 rounded-2xl p-4 text-xl">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
