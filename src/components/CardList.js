import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('Noooo!');
  // }
  const cardsArray = robots.map((user, i) => {
    return <Card key={user.id} id={user.id} name={user.name} email={user.email} />;
  });
  return <div>{cardsArray}</div>;
};

export default CardList;
