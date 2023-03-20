import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Notes from "./components/Notes";
import Signup from "./components/Signup";
import NoteStates from "./context/notes/NoteStates";
import Home from "./components/Home";
import AlertState from "./context/notes/AlertState";

function App() {

  (localStorage.token)&&<Login/>

  return (
    <div className="App">
      <AlertState>
        <NoteStates>
          <Router>
            <Navbar />
            <AlertState>
              <Switch>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/link" element={<Notes/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/Signup" element={<Signup />} />
              </Switch>
            </AlertState>
          </Router>
        </NoteStates>
      </AlertState>
    </div>
  );
}

export default App;
