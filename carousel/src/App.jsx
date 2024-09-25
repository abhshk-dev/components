import "./App.css";
import Carousel from "./components/carousel";
import {slides} from "./data/carouselData.json"
function App() {
  return (
    
      <Carousel data={slides} />
    
  );
}

export default App;
