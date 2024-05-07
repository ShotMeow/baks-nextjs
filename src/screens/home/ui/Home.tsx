import type { FC } from "react";

import About from "./sections/About";
import Hero from "./sections/Hero";
import Tournaments from "./sections/Tournaments";
import Streams from "./sections/Streams";
import News from "@/src/screens/home/ui/sections/News";

const Home: FC = () => {
  return (
    <main className=" overflow-x-hidden">
      <Hero />
      <About />
      <Tournaments />
      <Streams />
      <News />
    </main>
  );
};

export default Home;
