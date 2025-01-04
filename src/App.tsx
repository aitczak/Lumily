import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CitiesList from "./components/CitiesList"


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/list" element={<CitiesList/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
