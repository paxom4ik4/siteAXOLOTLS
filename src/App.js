import React from "react";
import { Header } from "./components/header/header";
import {AxolotlsIntro} from "./components/axolotls-intro/axolotls-intro";
import {AxolotlsAmount} from "./components/axolotls-amount/axolotls-amount";
import {AxolotlsCarousel} from "./components/axolotls-carousel/axolotls-carousel";

export const App = () => {
  return (
    <div>
      <Header />
      <AxolotlsIntro />
      <AxolotlsAmount />
      <AxolotlsCarousel />
    </div>
  )
}