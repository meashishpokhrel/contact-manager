import "./assets/styles/App.scss";
import Contact from "./component/contact/Contact";
import Navbar from "./component/layout/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addcontact from "./component/contact/Addcontact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route
                  exact
                  path="/contact/add"
                  element={<Addcontact />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
