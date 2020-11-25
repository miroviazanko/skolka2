import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './App.scss';

import menuList from './components/menu/menu.json';

import grass from './assets/grass/grass-transp-1920-smaller.png';


import Menu from './components/menu/Menu';
import Header from './components/header/Header'
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';

import ONas from './components/onas/ONas';
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

      <Route render={({ location }) => (
        <>
        <Menu menu={menu}/>


          <TransitionGroup>
            <CSSTransition
                timeout={1000}
                classNames='fade'
                key={location.key}>

              <Switch location={location}>
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={WelcomeScreen} />
                <Route path={`${process.env.PUBLIC_URL}/oNas`} component={ONas} />
                <Route path={`${process.env.PUBLIC_URL}/skJedalen`} component={SkJedalen} />
                <Route path={`${process.env.PUBLIC_URL}/aktuality`} component={Aktuality} />
                <Route path={`${process.env.PUBLIC_URL}/fotogaleria`} component={Fotogaleria} />
                <Route path={`${process.env.PUBLIC_URL}/rezim`} component={Rezim} />
                <Route path={`${process.env.PUBLIC_URL}/tlaciva`} component={Tlaciva} />
                <Route path={`${process.env.PUBLIC_URL}/kontakt`} component={Kontakt} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}/>



      <Footer />

    </div>
  );
}

export default App;
