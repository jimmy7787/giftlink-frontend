import React from 'react';

const MainPage = () => {
  const gifts = [
    { id: 1, name: 'Wireless Headphones' },
    { id: 2, name: 'Smart Mug' },
    { id: 3, name: 'Travel Journal' }
  ];

  return (
    <div>
      <h1>GiftLink Main Page</h1>
      <ul>
        {gifts.map(gift => (
          <li key={gift.id}>{gift.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
