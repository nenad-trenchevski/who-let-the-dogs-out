import React, { useReducer } from 'react';
import './App.scss';
import { initialState } from './services/constants';
import BreedContext from './services/breedContext';
import breedReducer from './services/breedReducer';
//Components
import BreedList from './components/BreedList/BreedList';
import BreedImageHolder from './components/BreedImageHolder/BreedImageHolder';


const CLASS_NAMES = {
    MAIN_LAYOUT_CONTAINER: 'main-layout-container'
};

const App = () => {
    const [urlData, dispatch] = useReducer(breedReducer, initialState);
    return (
        <div className={CLASS_NAMES.MAIN_LAYOUT_CONTAINER}>
            <BreedContext.Provider value={{ urlData, dispatch }}>
                <BreedList />
                <BreedImageHolder />
            </BreedContext.Provider>
        </div>
    );
}

export default App;
