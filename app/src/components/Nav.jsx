import React, { useState, useEffect } from "react";
import Home from "./Home";
import AddLanguages from "./AddLanguages";
function Nav() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [mapData, setMapData] = useState([]);
  useEffect(() => {
    getFromLocal();
  }, []);
  function handleAddDiv(formData) {
    setIsShowForm(false);
    const data = {
      languageName: formData.languageName,
      founder: formData.founder,
      year: formData.year,
      difficulty: formData.difficulty,
    };
    const newData = [...mapData, data];
    setMapData(newData);

    saveToLocal("programmingLanguages", newData);
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  function getFromLocal() {
    const savedData = localStorage.getItem("programmingLanguages");
    if (savedData) {
      setMapData(JSON.parse(savedData));
    }
    return [];
  }
  return (
    <div>
      <div className="header">
        <div>
          <h1>Find My Programming Language</h1>
        </div>
      </div>
      <div className="nav">
        <button onClick={() => setIsShowForm(false)}>HOME</button>
        <span>|</span>
        <button onClick={() => setIsShowForm(true)}>ADD LANGUAGES</button>
      </div>
      {isShowForm ? (
        <AddLanguages addDiv={(formData) => handleAddDiv(formData)} />
      ) : (
        <Home formData={mapData} />
      )}
    </div>
  );
}
export default Nav;
