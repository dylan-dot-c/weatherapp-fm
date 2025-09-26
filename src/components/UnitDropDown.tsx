import check from "../assets/images/icon-checkmark.svg";
import useUnits from "../stores/unitsStore";
import clsx from "clsx";

const UnitDropDown = () => {
  const {
    temperature,
    toggleSystem,
    changeRainUnit,
    changeTempUnit,
    changespeedUnit,
    windSpeed,
    rainfall,
    unitSystem,
  } = useUnits();

  return (
    <article className="dropdown">
      <button onClick={toggleSystem}>
        Switch to {unitSystem == "imperial" ? "Metric" : "Imperial"}
      </button>

      <div className="units-container">
        <div className="unit-switch">
          <p className="title">Temperature</p>
          <button
            type="button"
            className="relative"
            onClick={() => changeTempUnit("celsius")}
          >
            <span>Celsius (°C)</span>
            <span
              className={clsx(
                "absolute left-full flex h-full w-auto items-center  top-0 -ml-4",
                { hidden: temperature == "fahrenheit" }
              )}
            >
              <img src={check} alt="check icon" />
            </span>
          </button>
          <button
            type="button"
            className="relative"
            onClick={() => changeTempUnit("fahrenheit")}
          >
            <span>Fahrenheit (°F)</span>
            <span
              className={clsx(
                "absolute left-full flex h-full w-auto items-center  top-0 -ml-4",
                { hidden: temperature == "celsius" }
              )}
            >
              <img src={check} alt="check icon" />
            </span>
          </button>
        </div>
        <div className="unit-switch">
          <p className="title">Wind Speed</p>

          <button
            type="button"
            className="relative"
            onClick={() => changespeedUnit("km/h")}
          >
            <span>km/h</span>
            <span
              className={clsx(
                "absolute left-full flex h-full w-auto items-center  top-0 -ml-4",
                { hidden: windSpeed != "km/h" }
              )}
            >
              <img src={check} alt="check icon" />
            </span>
          </button>
          <button
            type="button"
            className="relative"
            onClick={() => changespeedUnit("mph")}
          >
            <span>mph</span>
            <span
              className={clsx(
                "absolute left-full flex h-full w-auto items-center  top-0 -ml-4",
                { hidden: windSpeed != "mph" }
              )}
            >
              <img src={check} alt="check icon" />
            </span>
          </button>
        </div>
        <div className="unit-switch">
          <p className="title">Precipitation</p>
          <button
            type="button"
            className="relative"
            onClick={() => changeRainUnit("mm")}
          >
            <span>Millimeters (mm)</span>
            <span
              className={clsx(
                "absolute left-full flex h-full w-auto items-center  top-0 -ml-4",
                { hidden: rainfall != "mm" }
              )}
            >
              <img src={check} alt="check icon" />
            </span>
          </button>
          <button
            type="button"
            className="relative"
            onClick={() => changeRainUnit("inches")}
          >
            <span>Inches (in)</span>
            <span
              className={clsx(
                "absolute left-full flex h-full w-auto items-center  top-0 -ml-4",
                { hidden: rainfall != "inches" }
              )}
            >
              <img src={check} alt="check icon" />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default UnitDropDown;
