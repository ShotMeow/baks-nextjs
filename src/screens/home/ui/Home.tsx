import type { FC } from "react";

import About from "./sections/About";
import Hero from "./sections/Hero";
import Tournaments from "./sections/Tournaments";
import Streams from "./sections/Streams";
import News from "./sections/News";
import Shop from "./sections/Shop";
import Form from "./sections/Form";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Tournaments />
      <Streams />
      <News />
      <Shop />
      <Form />
      <p className="container my-40 text-center text-2xl font-semibold md:text-6xl">
        Место, где реальность встречается с игрой!
      </p>
    </main>
  );
};

export default Home;
