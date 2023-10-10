import React, { useState } from "react";
import Home from "./Home";
function AddLanguages({ addDiv }) {
  const [formData, setFormData] = useState([
    {
      languageName: "",
      founder: "",
      year: "",
      difficulty: "easy",
    },
  ]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    //console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(formData);
    addDiv(formData);

    // const data = {
    //   languageName: formData.languageName,
    //   founder: formData.founder,
    //   year: formData.year,
    //   difficulty: formData.difficulty,
    // };
    // const newData = [...formData, data];
    // setFormData(newData);
    // You can add code here to handle the form submission, e.g., sending data to an API.
  };
  return (
    <div className="container">
      <h2>Add a New Programming Language</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="languageName">Language Name:</label>
          <input
            type="text"
            id="languageName"
            name="languageName"
            value={formData.languageName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="founder">Founder:</label>
          <input
            type="text"
            id="Founder"
            name="founder"
            value={formData.founder}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="select-input">Difficulty Level:</label>
          <select
            id="select-input"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="buttondiv">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default AddLanguages;
