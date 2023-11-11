import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Detail from "./components/Home/Detail/Detail";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto lg:px-14 md:px-8 px-7">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
