import React, { useState } from 'react';
import './BreedList.scss';
import arrow from '../../assets/arrow.png';
import { API, METHOD, PROCCESS_MSG } from '../../services/constants';

import useEndpoint from '../../services/useEndpoint';
import SingleBreed from './SingleBreed/SingleBreed';

const CLASS_NAMES = {
    MENU_CONTAINER: 'menu-container',
    BREED_LIST: 'breed-list',
    HAMBURGER_MENU: 'hamburger-menu',
    OPEN_MENU: 'open-menu',
    OPENED: '-open',
    CLOSED: '-close'
};

const BreedList = () => {
    const [menu, menuToggle] = useState(true);
    // Create req object
    const breedList = useEndpoint({
        method: METHOD.GET,
        url: `${API.ALL_BREEDS}`
    });

    return (
        <div className={CLASS_NAMES.MENU_CONTAINER}>
            <div
                className={menu ? CLASS_NAMES.OPEN_MENU : CLASS_NAMES.BREED_LIST}>
                {
                    (breedList.pending && PROCCESS_MSG.LOADING)
                    || (breedList.error && PROCCESS_MSG.STH_HAPPENED)
                    || (breedList.complete && Object.keys(breedList.data.message)
                        .map((breed, index) => <SingleBreed key={index} aBreed={breed} />))
                }
            </div>
            <img src={arrow}
                alt='arrow'
                onClick={() => menuToggle(!menu)}
                className={CLASS_NAMES.HAMBURGER_MENU + (menu ? CLASS_NAMES.OPENED : CLASS_NAMES.CLOSED)} />
        </div>
    );
}

export default BreedList;
