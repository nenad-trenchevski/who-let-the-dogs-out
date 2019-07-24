import React, {useState} from 'react';
import './BreedList.scss';
//components
import SingleBreed from './SingleBreed/SingleBreed';

const CLASS_NAMES = {
  MENU_CONTAINER: 'menu-container',
  BREED_LIST: 'breed-list',
  HAMBURGER_MENU: 'hamburger-menu',
  OPEN_MENU: 'open-menu'
}

function BreedList() {
  const [menu, menuToggle] = useState(true);
  const menuArrow = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_left_48px-512.png';
  
  
  return (
    <div className={CLASS_NAMES.MENU_CONTAINER}>
      <div className={menu ? CLASS_NAMES.OPEN_MENU : CLASS_NAMES.BREED_LIST}>
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
          <SingleBreed />
        </div>
      <img src={menuArrow}
           onClick={() => menuToggle(!menu)}
           className={CLASS_NAMES.HAMBURGER_MENU + (menu ? '-open' : '-close')} />
    </div>
  );
}

export default BreedList;
