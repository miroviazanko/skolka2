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

  const menuRouter = menu.menuList;

  console.log(menuRouter);





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
                timeout={300}
                classNames='fade'
                key={location.key}>

              <Switch location={location}>
                <Route path="/" exact component={WelcomeScreen} />
                <Route path="/oNas" component={ONas} />
                <Route path="/skJedalen" component={SkJedalen} />
                <Route path="/aktuality" component={Aktuality} />
                <Route path="/fotogaleria" component={Fotogaleria} />
                <Route path="/rezim" component={Rezim} />
                <Route path="/tlaciva" component={Tlaciva} />
                <Route path="/kontakt" component={Kontakt} />
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
