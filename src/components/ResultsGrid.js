import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';

const ResultsGid = props => {
  const hostUrl = process.env.REACT_APP_APIHOST || 'http://localhost:3001/';
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    let response = await fetch(hostUrl + 'petlist');
    let data = await response.json();

    setApiData(data);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      { apiData.map(e => e.name) }
    </div>
  )
};

export default ResultsGid;