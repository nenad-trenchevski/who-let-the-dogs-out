import React from 'react';
//Components
import BreedList from './components/BreedList/BreedList';
import BreedImageHolder from './components/BreedImageHolder/BreedImageHolder';
import './App.scss';

const CLASS_NAMES = {
    MAIN_LAYOUT_CONTAINER: 'main-layout-container'
}

const App = () => {
    return (
        <div className={CLASS_NAMES.MAIN_LAYOUT_CONTAINER}>
            <BreedList />
            <BreedImageHolder />
        </div>
    );
}

export default App;
