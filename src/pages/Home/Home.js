import React from 'react';
import './Home.scss';
//Components
import BreedList from '../../components/BreedList/BreedList';
import BreedImageHolder from '../../components/BreedImageHolder/BreedImageHolder';

const CLASS_NAMES = {
    HOME_CONTAINER: 'home-container',
    MAIN_LAYOUT_CONTAINER: 'main-layout-container'
}

function Home() {
    return (
        <div className={CLASS_NAMES.HOME_CONTAINER}>
            <div className={CLASS_NAMES.MAIN_LAYOUT_CONTAINER}>
                <BreedList />
                <BreedImageHolder />
            </div>
        </div>
    );
}

export default Home;
