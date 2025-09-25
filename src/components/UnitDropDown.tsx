const UnitDropDown = () => {
  return (
    <article className="dropdown">
      <button>Switch to Metric</button>

      <div className="units-container">
        <div className="unit-switch">
          <p className="title">Temperature</p>
          <button type="button">Celsius (°C)</button>
          <button type="button">Fahrenheit (°F)</button>
        </div>
        <div className="unit-switch">
          <p className="title">Wind Speed</p>
          <button type="button">km/h</button>
          <button type="button">mph</button>
        </div>
        <div className="unit-switch">
          <p className="title">Precipitation</p>
          <button type="button">Millimeters (mm)</button>
          <button type="button">Inches (in)</button>
        </div>
      </div>
    </article>
  );
};

export default UnitDropDown;
