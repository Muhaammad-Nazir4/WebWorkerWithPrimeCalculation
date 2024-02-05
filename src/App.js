// src/App.js
import React, { useState, useEffect } from 'react';
import sortWithWebWorker from './WithWebWorker';
import sortWithoutWebWorker from './WithoutWebWorker';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [timeWithWorker, setTimeWithWorker] = useState(null);
  const [timeWithoutWorker, setTimeWithoutWorker] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      const result = await response.json();
      const populationData = result.data || [];
      setData(populationData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSortWithWorker = () => {
    const startTime = performance.now();

    sortWithWebWorker(data, (sortedArray) => {
      const endTime = performance.now();
      setData(sortedArray.reverse()); // Reverse the sorted array for descending order
      setTimeWithWorker(endTime - startTime);
    });
  };

  const handleSortWithoutWorker = () => {
    const startTime = performance.now();

    const sortedArray = sortWithoutWebWorker(data).reverse(); // Reverse the sorted array for descending order

    const endTime = performance.now();
    setData(sortedArray);
    setTimeWithoutWorker(endTime - startTime);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2 style={{color:'white'}}>WebWorkers</h2>
        <button  onClick={handleSortWithWorker}>
          Sort with Web Worker
        </button>
        <button onClick={handleSortWithoutWorker}>Sort without Web Worker</button>
        <div style={{ color:'white'}}>
          {timeWithWorker && <p style={{ color:'white'}}>Time with Web Worker: {timeWithWorker.toFixed(2)} milliseconds</p>}
          {timeWithoutWorker && <p style={{ color:'white'}}>Time without Web Worker: {timeWithoutWorker.toFixed(2)} milliseconds</p>}
        </div>
      </div>
      <div className="content">
        <div className="card-container">
          {data.map((entry, index) => (
            <div className="card" key={index}>
              <p style={{backgroundColor:'darkblue', color:'white'}}>Population: {entry.Population}</p>
              <p>Nation ID: {entry['ID Nation']}</p>
              <p>Nation: {entry.Nation}</p>
              <p>Year ID: {entry['ID Year']}</p>
              <p>Year: {entry.Year}</p>              
              <p>Slug Nation: {entry['Slug Nation']}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
