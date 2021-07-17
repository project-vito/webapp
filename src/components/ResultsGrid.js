import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import GridItem from './GridItem';

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
      <ul>
        { apiData.map(e => <GridItem {...e} /> ) }
      </ul>
    </div>
  )
};

export default ResultsGid;