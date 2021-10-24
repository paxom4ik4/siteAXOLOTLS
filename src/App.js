import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import { Header } from "./components/header/header";
import { AxolotlsIntro } from "./components/axolotls-intro/axolotls-intro";
import { AxolotlsAmount } from "./components/axolotls-amount/axolotls-amount";
import { AxolotlsCarousel } from "./components/axolotls-carousel/axolotls-carousel";
import { Collage } from "./components/collage/collage";
import { Roadmap } from "./components/roadmap/roadmap";
import { Community } from "./components/join-community/join-community";
import { Footer } from "./components/footer/footer";
import { FAQ } from "./components/faq/faq";
import { Lore } from "./components/Lore";

export const App = () => {
  return (
    <div className={'app'}>
      <Router>
      <Header />
        <Switch>
          <Route path={'/'} exact>
            <Collage />
            <AxolotlsIntro />
            <AxolotlsAmount />
            <AxolotlsCarousel />
            <Roadmap />
            <Community />
            <FAQ />
          </Route>
          <Route path={'/lore'} exact>
            <Lore />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </div>
  )
}