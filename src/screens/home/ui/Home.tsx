import type { FC } from "react";

import Hero from "./sections/Hero";
import Slider from "./sections/Slider";
import Tournaments from "./sections/Tournaments";

const Home: FC = () => {
  return (
    <main>
      <Slider />
      <Hero />
      <Tournaments />
    </main>
  );
};

export default Home;
