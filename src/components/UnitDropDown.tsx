const UnitDropDown = () => {
  return (
    <article className="bg-neutral-800 border-neutral-600 p-2 rounded">
      <button>Switch to Metric</button>

      <div>
        <p>Temperature</p>
        <button type="button">Celsius (°C)</button>
        <button type="button">Fahrenheit (°F)</button>
      </div>
      <div>
        <p>Wind Speed</p>
        <button type="button">km/h</button>
        <button type="button">mph</button>
      </div>
      <div>
        <p>Precipitation</p>
        <button type="button">Millimeters (mm)</button>
        <button type="button">Inches (in)</button>
      </div>
    </article>
  );
};

export default UnitDropDown;
