import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import menuList from './components/menu/menu.json';


import Menu from './components/menu/Menu';
import Header from './components/header/Header'
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';

import OSkolke from './components/oskolke/OSkolke';
import Personal from './components/personal/Personal';

import Footer from './components/footer/Footer';






function App() {

  const [menu] = useState(menuList)


  return (
    <div className="App">

      <Header />

      <Menu menu={menu} />

      <WelcomeScreen />

      <Switch>
        <Route path="/oskolke" component={OSkolke} />
        <Route path="/personal" component={Personal} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
