import React from "react";
import { Header } from "./components/header/header";
import {AxolotlsIntro} from "./components/axolotls-intro/axolotls-intro";
import {AxolotlsAmount} from "./components/axolotls-amount/axolotls-amount";
import {AxolotlsCarousel} from "./components/axolotls-carousel/axolotls-carousel";

import './App.css';
import { Collage } from "./components/collage/collage";
import { Roadmap } from "./components/roadmap/roadmap";
import { Community } from "./components/join-community/join-community";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <Collage />
      <AxolotlsIntro />
      <AxolotlsAmount />
      <AxolotlsCarousel />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  )
}