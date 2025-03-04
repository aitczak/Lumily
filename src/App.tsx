import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import NavBar from  "./components/NavBar"
import Landing from "./components/Landing"
import Practice from "./components/Practice"
import Exercises from "./components/Exercises";


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route
          path="/profile"
          element={
            <>
              <NavBar />
              <Profile />
            </>
          }
        />
        <Route
          path="/dash"
          element={
            <>
              <NavBar />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
