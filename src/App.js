import React, { useState } from "react";

import './App.scss';

import menuList from './components/menu/menu.json';


import Menu from './components/menu/Menu';
import Header from './components/header/Header'
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';
import Footer from './components/footer/Footer';






function App() {

  const [menu] = useState(menuList)


  return (
    <div className="App">

      <Header />

      <Menu menu={menu} />

      <WelcomeScreen />

      <Footer />
    </div>
  );
}

export default App;
