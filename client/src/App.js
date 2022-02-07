import "./assets/styles/App.scss";
import Contact from "./component/contact/Contact";
import Navbar from "./component/layout/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Contact />
      </header>
    </div>
  );
}

export default App;
