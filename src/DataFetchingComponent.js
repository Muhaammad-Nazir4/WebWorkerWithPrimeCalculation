// DataFetchingComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataFetchingComponent.css'; // Import the CSS file

const DataFetchingComponent = () => {
  const [index, setIndex] = useState(1);
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setTitles(response.data.map((item) => ({ id: item.id, title: item.title })));
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${index}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTitles();
    fetchData();
  }, [index]);

  const handleTitleChange = (event) => {
    setIndex(parseInt(event.target.value, 10));
  };

  return (
    <div>
     <h2 style={{backgroundColor:'darkblue',marginTop:'0px', padding:'20px', textAlign:'center', color:'white'}}>Fetch Data Using AJAX</h2>
     <label htmlFor="titles">Select a Title:</label>
     <select id="titles" onChange={handleTitleChange} value={index}
     style={{marginBottom:'50px'}}
     >
        {titles.map((title) => (
          <option key={title.id} value={title.id}>
            {title.title}
          </option>
        ))}
      </select>
     <div className="data-container">
  
      <div className="data-details">
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </div>
    </div>

  );
};

export default DataFetchingComponent;
