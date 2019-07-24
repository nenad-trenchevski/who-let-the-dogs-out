import React from 'react';
import Home from './pages/Home/Home';
import './App.scss';

const CLASS_NAMES = {
  LOGO: 'logo'
}

function App() {
  return (
    <div className="App">
      <img src='https://www.orangedogwebdesign.com/wp-content/uploads/2018/10/cropped-Orange-Dog-Logo-1-182x300.png'
           className={CLASS_NAMES.LOGO}
           alt='logo' />
        <Home />
    </div>
  );
}

export default App;
