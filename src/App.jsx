import "./index.css";

import { Hero, Bio, Skills, StudyCases } from "./layout/";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Hero />
      <Bio />
      <Skills />
      <StudyCases />
      <Footer />
    </div>
  );
}

export default App;
