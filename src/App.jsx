import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navBar";
import Banner from "./components/banner";
import TextDesc from "./components/text&desc";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <TextDesc />
    </div>
  );
}

export default App;
