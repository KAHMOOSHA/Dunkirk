import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navBar";
import Banner from "./components/banner";
import TextDesc from "./components/text&desc";
import ImgHolders from "./components/imgHolder";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <TextDesc />
      <ImgHolders />
    </div>
  );
}

export default App;
