import React from 'react';
import ResultGrid from '../components/ResultsGrid';
import Spacer from '../components/Spacer';

const FriendList = () => {
  return (
    <div className="container FriendList">
      <Spacer height="40" />
      <ResultGrid />
    </div>
  );
}

export default FriendList;