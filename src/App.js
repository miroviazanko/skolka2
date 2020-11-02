import React, { useState } from "react";

import './App.css';

import menuList from './components/menu/menu.json';

import Menu from './components/menu/Menu';
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';
import Main from './components/main/Main';





function App() {

  const [menu] = useState(menuList)


  return (
    <div className="App">
      <Menu menu={menu}/>
      <WelcomeScreen />
      <Main />
    </div>
  );
}

export default App;
