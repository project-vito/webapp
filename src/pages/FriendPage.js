import React from 'react';
import { useParams } from 'react-router-dom'

const FriendPage = () => {
  const { id } = useParams(); 

  return (
    <div className="container friend-page">
    </div>
  );
}

export default FriendPage;