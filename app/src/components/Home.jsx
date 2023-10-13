import React, { useState, useEffect } from "react";
import Result from "./Result";
import AddLanguages from "./AddLanguages";
function Home() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [mapData, setMapData] = useState(getFromLocal());
  useEffect(() => {
    // getFromLocal();
    saveToLocal(mapData);
  }, [mapData]);
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

  function saveToLocal(data) {
    localStorage.setItem("ProgrammingLanguages", JSON.stringify(data));
  }
  function getFromLocal() {
    const savedData = localStorage.getItem("ProgrammingLanguages");
    if (savedData) {
      const storedLanguages = JSON.parse(savedData);
      return storedLanguages;
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
        <Result formData={mapData} />
      )}
    </div>
  );
}
export default Home;

// import React, { useState, useEffect } from "react";
// import Result from "./Result";
// import AddLanguages from "./AddLanguages";
// function Home() {
//   const [isShowForm, setIsShowForm] = useState(false);
//   const [mapData, setMapData] = useState(getFromLocal());
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 6;
//   useEffect(() => {
//     // getFromLocal();
//     saveToLocal(mapData);
//   }, [mapData]);
//   useEffect(() => {

//   }, [currentPage]);

//   function handleAddDiv(formData) {
//     setIsShowForm(false);
//     const data = {
//       languageName: formData.languageName,
//       founder: formData.founder,
//       year: formData.year,
//       difficulty: formData.difficulty,
//     };
//     const newData = [...mapData, data];
//     setMapData(newData);
//     saveToLocal("programmingLanguages", newData);
//   }
//   function saveToLocal(data) {
//     localStorage.setItem("ProgrammingLanguages", JSON.stringify(data));
//   }
//   function getFromLocal() {
//     const savedData = localStorage.getItem("ProgrammingLanguages");
//     if (savedData) {
//       const storedLanguages = JSON.parse(savedData);
//       return storedLanguages;
//     }
//     return [];
//   } // Calculate the index of the first and last card on the current page
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = mapData.slice(indexOfFirstCard, indexOfLastCard); // Function to change the current page
//   const paginate = (pageNumber) => {
//     console.log(pageNumber);
//     setCurrentPage(pageNumber);
//   };
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
//         <>
//           <Result formData={currentCards} />
//           <div className="pagination">
//             {mapData.length > cardsPerPage && (
//               <ul>
//                 {Array.from({
//                   length: Math.ceil(mapData.length / cardsPerPage),
//                 }).map((_, index) => (
//                   <li key={index}>
//                     <button onClick={() => paginate(index + 1)}>
//                       {index + 1}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
// export default Home;
