import React, { useState } from "react";

import './App.css';

import menuList from './components/menu/menu.json';

import Menu from './components/menu/Menu';
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';






function App() {

  const [menu] = useState(menuList)


  return (
    <div className="App">
      <Menu menu={menu}/>
      <WelcomeScreen />
    </div>
  );
}

export default App;
