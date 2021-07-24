import React, { useEffect, useState, useContext } from 'react';
import GridItem from './GridItem';

const ResultsGid = props => {
  var { count } = props;
  const hostUrl = process.env.REACT_APP_APIHOST || 'http://localhost:3001/';
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    let response = await fetch(hostUrl + 'petlist');
    let data = await response.json();

    if(count) {
      data = data.filter(e => {
        count--;
        if(count >= 0) return e;
      })
    }
    setApiData(data);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <ul className="results-grid">
      { apiData.map(e => <GridItem {...e} /> ) }
    </ul>
  )
};

export default ResultsGid;