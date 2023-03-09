import AllROute from "./AllRoute/AllRoute";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div >
      <div  >
        <Navbar />
      </div>
      <div className="App2" >
        <AllROute />
      </div>
    </div>
  );
}

export default App;
