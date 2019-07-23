import React from 'react';
import './Home.scss';
//Components
import BreedList from '../../components/BreedList/BreedList';
import BreedImageHolder from '../../components/BreedImageHolder/BreedImageHolder';

function Home() {
  return (
    <div className="App">
        <h1>A Home Page</h1>
        <BreedList />
        <BreedImageHolder />
    </div>
  );
}

export default Home;
