import React from "react";
import { Header } from "./components/header/header";
import {AxolotlsIntro} from "./components/axolotls-intro/axolotls-intro";
import {AxolotlsAmount} from "./components/axolotls-amount/axolotls-amount";
import {AxolotlsCarousel} from "./components/axolotls-carousel/axolotls-carousel";

import pageAxolotl from './assets/page-axolotl.png';

import './App.css';
import { Collage } from "./components/collage/collage";
import { Roadmap } from "./components/roadmap/roadmap";

export const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <Collage />
      <AxolotlsIntro />
      <AxolotlsAmount />
      <AxolotlsCarousel />
      <Roadmap />
      <div className={'page-axolotl'}><img src={pageAxolotl} /></div>
    </div>
  )
}