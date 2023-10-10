// import React, { useState } from "react";
// import Home from "./Home";
// import AddLanguages from "./AddLanguages";

// function Nav() {
//   const [isShowForm, setIsShowForm] = useState(false);
//   const [mapData, setMapData] = useState([]);

//   function handleAddDiv(formData) {
//     setIsShowForm(false);
//     const data = {
//       languageName: formData.languageName,
//       founder: formData.founder,
//       year: formData.year,
//       difficulty: formData.difficulty,
//     };
//     setMapData([...mapData, data]);
//   }
//   function getBadgeColor(difficulty) {
//     console.log("testing");
//     switch (difficulty) {
//       case "normal":
//         return "orange";
//       case "medium":
//         return "yellow";
//       case "hard":
//         return "red";
//       case "easy":
//         console.log(difficulty);
//         return "green";
//       default:
//         return "green";
//     }
//   }

//   return (
//     <div>
//       <div className="header">
//         <div>
//           <h1>Find My Programming Language</h1>
//         </div>
//       </div>
//       <div className="nav">
//         <button onClick={() => setIsShowForm(false)}>HOME</button>
//         <span>|</span>
//         <button onClick={() => setIsShowForm(true)}>ADD LANGUAGES</button>
//       </div>

//       {isShowForm ? (
//         <AddLanguages addDiv={(formData) => handleAddDiv(formData)} />
//       ) : (
//         // console.log(mapData.length)
//         <div>
//           <div>total:{mapData.length}</div>
//           <div className="output">
//             {mapData.map((item, index) => (
//               <div key={index} className="resultcard">
//                 <h2>{item.languageName}</h2>
//                 <p>Founder: {item.founder}</p>
//                 <p>Year: {item.year}</p>
//                 <p>
//                   Difficulty:
//                   <span className={`badge ${getBadgeColor(item.difficulty)}`}>
//                     {item.difficulty}
//                   </span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Nav;

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
  //   function clearLocalStorage() {
  //     localStorage.removeItem("programmingLanguages");
  //     setMapData([]);
  //   }
  function getBadgeColor(difficulty) {
    switch (difficulty) {
      case "normal":
        return "orange";
      case "medium":
        return "yellow";
      case "hard":
        return "red";
      case "easy":
        return "green";
      default:
        return "green";
    }
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
        {/* <button onClick={clearLocalStorage}>Clear All Data</button> */}
      </div>
      {isShowForm ? (
        <AddLanguages addDiv={(formData) => handleAddDiv(formData)} />
      ) : (
        <div>
          <div>total: {mapData.length}</div>
          <div className="output">
            {mapData.map((item, index) => (
              <div key={index} className="resultcard">
                <h2>{item.languageName}</h2>
                <p>Founder: {item.founder}</p>
                <p>Year: {item.year}</p>
                <p>
                  Difficulty:
                  <span className={`badge ${getBadgeColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Nav;
