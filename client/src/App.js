import "./assets/styles/App.scss";
import Contact from "./pages/Contacts/AllContacts";
import Navbar from "./component/Navbar/Navbar";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Addcontact from "./pages/AddContacts/AddContact";
import Editcontact from "./pages/EditContacts/EditContact";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const routes = [
  { path: "/", component: HomePage, private: null },
  { path: "/signin", component: Login, private: false },
  { path: "/signup", component: Register, private: false },
  { path: "/contact/add", component: Addcontact, private: true },
  { path: "/contact/edit/:id", component: Editcontact, private: true },
  { path: "/contact", component: Contact, private: true },
];

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
              {auth.token
                ? routes
                    .filter(({ private: pr }) => [null, true].includes(pr))
                    .map(({ path, component: C }) => {
                      return <Route exact path={path} element={<C />} />;
                    })
                : routes
                    .filter(({ private: pr }) => [null, false].includes(pr))
                    .map(({ path, component: C }) => {
                      return <Route exact path={path} element={<C />} />;
                    })}

              <Route
                path="*"
                element={<Navigate to={auth.token ? "/contact" : "/"} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
