import type { FC } from "react";

import Hero from "./sections/Hero";
import Slider from "./sections/Slider";
import Tournaments from "./sections/Tournaments";
import Streams from "./sections/Streams";

const Home: FC = () => {
  return (
    <main>
      <Slider />
      <Hero />
      <Tournaments />
      <Streams />
    </main>
  );
};

export default Home;
