import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
  // if (true) {
  //   throw new Error('Noooo!');
  // }

  const peopleArray = people.map((person, i) => {
    return (
      <Card
        key={person.name}
        id={person.name}
        person={person.name}
        height={person.height}
        mass={person.mass}
        hairColor={person.hair_color}
        skinColor={person.skin_color}
        eyeColor={person.eye_color}
        birthYear={person.birth_year}
        gender={person.gender}
        homeWorld={person.homeworld}
      />
    );
  });

  return <div>{peopleArray}</div>;
};

export default CardList;
