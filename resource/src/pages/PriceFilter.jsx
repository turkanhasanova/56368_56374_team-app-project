import { useState } from "react";

export default function PriceFilter({ onSubmit }) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(+value);
  };

  return (
    <>
      <label for="customRange1" class="form-label">
        Price filter
      </label>
      <input
        step={1}
        min={0.5}
        max={15}
        type="range"
        class="form-range"
        id="customRange1"
        value={value}
        onChange={handleChange}
      ></input>
      Price: {value}
      {/* <button onClick={handleSubmit}>submit</button> */}
      <button onClick={handleSubmit} class="filter" type="submit">Submit</button>
      </>
  )
}