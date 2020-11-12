import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import menuList from './components/menu/menu.json';

import grass from './assets/grass/grass-transp-1920-smaller.png';


import Menu from './components/menu/Menu';
import Header from './components/header/Header'
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';

import OSkolke from './components/oskolke/OSkolke';
import SkJedalen from './components/skJedalen/SkJedalen';
import Aktuality from './components/aktuality/Aktuality';
import Fotogaleria from './components/fotogaleria/Fotogaleria';
import Rezim from './components/rezim/Rezim';
import Tlaciva from './components/tlaciva/Tlaciva';
import Kontakt from './components/kontakt/Kontakt';


import Footer from './components/footer/Footer';






function App() {

  const [menu] = useState(menuList)

  return (
    <div className="App">

      <Header />

      <img src={grass}
        alt="trava"
        className="grass"
      />

      <Menu menu={menu}/>

      <Switch>
        <Route path="/" exact component={WelcomeScreen} />

        <Route path="/oskolke" component={OSkolke} />
        <Route path="/skJedalen" component={SkJedalen} />
        <Route path="/aktuality" component={Aktuality} />
        <Route path="/fotogaleria" component={Fotogaleria} />
        <Route path="/rezim" component={Rezim} />
        <Route path="/tlaciva" component={Tlaciva} />
        <Route path="/kontakt" component={Kontakt} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
