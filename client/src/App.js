import "./assets/styles/App.scss";
import Contact from "./component/contact/Contact";
import Navbar from "./component/layout/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Contact />
        </header>
      </div>
    </Provider>
  );
}

export default App;
