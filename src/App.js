import "./App.css";
import Login from "./Components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import "./Components/page/universal.scss";
import Navbar from "./Components/Navbar/Navbar";
import MenuLeft from "./Components/MenuLeft/MenuLeft";
import Home from "./Components/page/Home/Home";
import { useSelector } from "react-redux";
import Umrah from "./Components/page/Umrah/Umrah";
import Other from "./Components/page/Other/Other";
import AllTypes from "./Components/page/AllTypes/AllTypes";

function App() {
  const user = useSelector((s) => s?.users_reducer?.user);

  if (user?.parol === "admin") {
    return (
      <>
        <div className="main">
          <Navbar />
          <div className="flex">
            <MenuLeft />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/umrah" element={<Umrah />} />
              <Route path="/other" element={<Other />} />
              <Route path="/alltypes" element={<AllTypes />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default App;
