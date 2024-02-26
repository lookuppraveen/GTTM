import { useEffect } from "react";
import Back_Story_Section from "./components/Back_Story_Section";
import Banner_Section from "./components/Banner_Section";
import Footer_Section from "./components/Footer_Section";
import Header_Section from "./components/Header_Section";
import How_To_Buy_Section from "./components/How_To_Buy_Section";
import RoadMap_Sections from "./components/RoadMap_Sections";
import Tokenomics_Section from "./components/Tokenomics_Section";
import Whitelist_Section from "./components/Whitelist_Section";
import PriceTicker from "./components/PriceTicker";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className=" flex flex-col justify-center items-center">
      <Header_Section />
      <Banner_Section />
      <Back_Story_Section />
      <Whitelist_Section/>
      <How_To_Buy_Section />
      <Tokenomics_Section />
      <PriceTicker />
      <RoadMap_Sections />
      <Footer_Section />
    </main>
  );
}

export default App;
