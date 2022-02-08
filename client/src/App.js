import "./assets/styles/App.scss";
import Contact from "./component/contact/AllContacts";
import Navbar from "./component/layout/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addcontact from "./component/contact/Addcontact";
import Editcontact from "./component/contact/Editcontact";
import Home from "./component/pages/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signin" element={<Login />} />
                <Route exact path="/signup" element={<Register />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/contact/add" element={<Addcontact />} />
                <Route
                  exact
                  path="/contact/edit/:id"
                  element={<Editcontact />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
