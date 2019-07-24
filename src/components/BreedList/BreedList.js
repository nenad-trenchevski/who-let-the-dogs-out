import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BreedList.scss';
//components
import SingleBreed from './SingleBreed/SingleBreed';

const CLASS_NAMES = {
    MENU_CONTAINER: 'menu-container',
    BREED_LIST: 'breed-list',
    HAMBURGER_MENU: 'hamburger-menu',
    OPEN_MENU: 'open-menu'
}

function useEndpoint(req) {

    const [res, setRes] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false
    });

    useEffect(() => {
        setRes({
            data: null,
            pending: true,
            error: false,
            complete: false
        });
        axios(req)
            .then(res =>
                setRes({
                    data: res.data,
                    pending: false,
                    error: false,
                    complete: true
                }),
            )
            .catch(() =>
                setRes({
                    data: null,
                    pending: false,
                    error: true,
                    complete: true
                }),
            );
    },
        [req.url]
    );
    return res;
}

function BreedList() {
    const [menu, menuToggle] = useState(true);
    const menuArrow = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_left_48px-512.png';
    const breedListApi = "https://dog.ceo/api/breeds/list/all";
    const breedList = useEndpoint({
        method: "GET",
        url: `${breedListApi}`
    });

    return (
        <div className={CLASS_NAMES.MENU_CONTAINER}>
            <div className={menu ? CLASS_NAMES.OPEN_MENU : CLASS_NAMES.BREED_LIST}>
                {(breedList.pending && 'Loading...') || (breedList.complete && Object.keys(breedList.data.message).map((breed, index) => <SingleBreed key={index} aBreed={breed} />))}
            </div>
            <img src={menuArrow}
                alt="arrow"
                onClick={() => menuToggle(!menu)}
                className={CLASS_NAMES.HAMBURGER_MENU + (menu ? '-open' : '-close')} />
        </div>
    );
}

export default BreedList;
