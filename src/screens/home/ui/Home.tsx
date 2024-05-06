import type { FC } from "react";

import About from "./sections/About";
import Index from "./sections/Hero";
import Tournaments from "./sections/Tournaments";
import Streams from "./sections/Streams";

const Home: FC = () => {
  return (
    <main>
      <Index />
      <About />
      <Tournaments />
      <Streams />
    </main>
  );
};

export default Home;
