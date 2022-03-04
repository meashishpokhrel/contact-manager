import "./assets/styles/App.scss";
import Contact from "./pages/Contact/Contacts/AllContacts";
import Navbar from "./component/Navbar/Navbar";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Addcontact from "./pages/Contact/AddContacts/AddContact";
import Editcontact from "./pages/Contact/EditContacts/EditContact";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const auth = useSelector((states) => states.auth);

  return (
    <Router>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path="/signin" element={<Login />}></Route>

              <Route
                path="/contact"
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/contact/add"
                element={
                  <ProtectedRoute>
                    <Addcontact />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/contact/edit/:id"
                element={
                  <ProtectedRoute>
                    <Editcontact />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
