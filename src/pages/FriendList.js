import React from 'react';
import ResultsGrid from '../components/ResultsGrid';
import Spacer from '../components/Spacer';

const FriendList = () => {
  return (
    <div className="container friend-list">
      <div className="row">
        <Spacer height="40" />
        <ResultsGrid />
      </div>
    </div>
  );
}

export default FriendList;