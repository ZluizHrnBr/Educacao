import {Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
       <NavBar />
       <Outlet />
    </div>
  );
}

export default App;
