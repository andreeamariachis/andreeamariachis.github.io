import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

/* Credits:
Logo made with https://logo.com/
Portfolio inspired by the tutorial: https://www.youtube.com/watch?v=0fYi8SGA20k&t=2447s */
