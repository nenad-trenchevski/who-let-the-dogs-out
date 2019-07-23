import React from 'react';
import './BreedList.scss';
//components
import SingleBreed from './SingleBreed/SingleBreed';

function BreedList() {
  return (
    <div>
        <h1>Breed List</h1>
        <SingleBreed />
        <SingleBreed />
        <SingleBreed />
        <SingleBreed />
    </div>
  );
}

export default BreedList;
