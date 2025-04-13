import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Focus } from "./components/focus";
import { Alliances } from "./components/alliances";
import { Contact } from "./components/contact";
import { Why } from "./components/why";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <Focus />
      <Services />
      <Contact />
      <About />
      <Why />
      <Alliances />
    </div>
  );
};

export default App;
