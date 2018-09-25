import React from 'react';

const Card = ({
  person,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
  homeWorld
}) => {
  return (
    <div className="tc yellow bg-black dib br3 pa3 ma2 grow bw shadow-5">
      <div>
        <p> Person: {person}</p>
        <p> Height: {height}</p>
        <p> Mass: {mass}</p>
        <p> Hair Color: {hairColor}</p>
        <p> Skin Color: {skinColor}</p>
        <p> Eye Color: {eyeColor}</p>
        <p> Birth Year: {birthYear}</p>
        <p> Gender: {gender}</p>
        <p> Homeworld: {homeWorld}</p>
      </div>
    </div>
  );
};

export default Card;
